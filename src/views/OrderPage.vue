<template>
  <div class="order-page">
    <span class="order-page__logo">Need for drive</span>
    <span class="order-page__map">
      <img
          class="order-page__map-image"
          src="../assets/images/marker.svg"
          alt="map marker"
      >
      Ульяновск
    </span>
    <b class="order-page__pad-left"/>
    <div class="order-page__progress-bar">
      <ul>
        <li>Местоположение</li>
        <li><img src="../assets/images/triangle.svg"></li>
        <li>Модель</li>
        <li><img src="../assets/images/triangle.svg"></li>
        <li>Дополнительно</li>
        <li><img src="../assets/images/triangle.svg"></li>
        <li>Итого</li>
      </ul>
    </div>
    <div class="order-page__progress-bar_mobile">
      <ul>
        <li
            v-if="currentStepIndex > 0"
            src="../assets/images/triangle.svg"
            @click="moveStepBack"
        >
          Назад
        </li>
        <li>{{ currentStep.name }}</li>
      </ul>


    </div>
    <b class="order-page__pad-right"/>
    <router-view
        class="order-page__content"
        @infoUpdated="handleInfoUpdate"
    />
    <div class="order-page__info">
      <div class="order-page__info__caption">
        Ваш заказ:
      </div>
      <div
          v-for="item in filteredDisplayedInfo"
          :key="item.name"
          class="order-page__info__item"
      >
        <span class="order-page__info__name">
          {{ item.name }}:
        </span>
        <b class="order-page__info__dots"/>
        <span class="order-page__info__value">{{ item.value }}</span>
      </div>
      <div class="order-page__info__price">
        Цена:
      </div>
      <button
          class="order-page__info__button_main-accent"
          :disabled="!nextStepAvailable"
          @click="moveStepForward"
      >
        {{ currentStep.buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import {steps} from "../mock/steps.mock";
import {infoTemplate} from "../mock/info.mock";
import {orderTemplate} from "../mock/order.mock";

export default {
  name: "OrderPage",
  data() {
    return {
      steps: steps,
      currentStepIndex: 0,
      nextStepAvailable: false,
      displayedInfo: infoTemplate,
      order: orderTemplate,
      selectedCity: '',
      selectedPoint: ''
    }
  },
  computed: {
    currentStep() {
      return this.steps[this.currentStepIndex];
    },
    filteredDisplayedInfo() {
      return this.displayedInfo.filter(info => info.value);
    }
  },
  methods: {
    moveStepForward() {
      //if (this.currentStepIndex < this.steps.length - 1) this.currentStepIndex++;
      this.nextStepAvailable = false;
    },
    moveStepBack() {
      if (this.currentStepIndex > 0) this.currentStepIndex--;
    },
    handleInfoUpdate(updatedInfo) {
      switch (updatedInfo.name) {
        case 'location':
          this.handleLocationUpdate(updatedInfo.value);
          break;
      }
    },
    handleLocationUpdate(location) {
      this.displayedInfo = infoTemplate;
      this.displayedInfo[0].value = location.cityId.name + ',\n' + location.address;
      this.order = orderTemplate;
      this.order.cityId.id = location.cityId.id;
      this.order.pointId.id = location.id;
      this.nextStepAvailable = true;
    }
  }
}
</script>

<style scoped lang="scss">

.pad {
  border-top: solid;
  border-bottom: solid;
  border-width: 1px;
  border-color: $gray-light;
  min-width: 16px;
}

.order-page {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  grid-template-rows: 96px 32px 1fr;
  gap: 0 0;
  grid-auto-flow: row;
  grid-template-areas:
    ". logo . map ."
    "pad-left progress-bar progress-bar progress-bar pad-right"
    ". content . info .";
  width: 100%;


  &__logo {
    grid-area: logo;
    @include roboto-text(700, 30px, $main-accent);
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__map {
    grid-area: map;
    @include roboto-text(400, 14px, $gray);
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__map-image {
    margin-right: 9px;
  }

  &__pad-left {
    grid-area: pad-left;
    @extend .pad;
  }

  &__pad-right {
    grid-area: pad-right;
    @extend .pad;
  }

  &__progress-bar {
    grid-area: progress-bar;

    ul {
      display: flex;
      gap: 16px;
      padding: 8px 0 8px 0;
      border-top: solid;
      border-bottom: solid;
      border-width: 1px;
      border-color: $gray-light;

      li {
        @include roboto-text(700, 14px, $main-accent);
      }
    }

    &_mobile {
      display: none;

      ul {
        display: flex;
        gap: 16px;
        padding: 8px 0 8px 0;
        border-top: solid;
        border-bottom: solid;
        border-width: 1px;
        border-color: $gray-light;

        li {
          @include roboto-text(700, 14px, $main-accent);
        }
      }
    }
  }

  &__content {
    grid-area: content;
    padding-top: 32px;
  }

  &__info {
    grid-area: info;
    border-left: solid;
    border-width: 1px;
    border-color: $gray-light;
    padding: 32px 0 0 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    min-width: 320px;

    &__caption {
      @include roboto-text(500, 18px, $black);
      align-self: flex-end;
    }

    &__item {
      @include roboto-text(300, 14px, $black);
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__name {
    }

    &__dots {
      border-bottom: $gray 1px dotted;
      width: 50%;
    }

    &__value {
      text-align: right;
      color: $gray;
      white-space: pre;
    }

    &__price {
      @include roboto-text(500, 16px, $black);
    }

    &__button_main-accent {
      @include button($main-gradient-colors);
    }
  }

}

@media screen and (min-width: 1440px) {

}

@media screen and (min-width: 1024px) and (max-width: 1440px) {

}

@media screen and (min-width: 768px) and (max-width: 1024px) {

}

@media screen and (min-width: 0) and (max-width: 768px) {
  .order-page {
    display: flex;
    flex-direction: column;
    width: 100%;


    &__logo {
      @include roboto-text(700, 30px, $main-accent);
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 16px;
      padding-right: 16px;
    }

    &__map {
      @include roboto-text(400, 14px, $gray);
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 16px;
    }

    &__map-image {
      margin-right: 9px;
    }

    &__pad-left {
      display: none;
    }

    &__pad-right {
      display: none;
    }

    &__progress-bar {
      display: none;

      &_mobile {
        display: block;

        ul {
          justify-content: flex-start;
          padding-left: 8px;

          li:first-child {
            cursor: pointer;
          }
        }
      }
    }

    &__content {
      padding-top: 32px;
      padding-left: 8px;
    }

    &__info {
      border: none;
      padding: 32px 8px 0 8px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      min-width: 0;

      &__caption {
        align-self: flex-end;
        @include roboto-text(500, 18px, $black);
      }

      &__price {
      }

      &__item {
      }

      &__button_main-accent {
        border-radius: 0;
        align-self: stretch;
        margin: 0 -8px 0 -8px;
      }
    }

  }
}

</style>
