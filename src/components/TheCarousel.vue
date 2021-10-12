<template>
  <div class="carousel">

    <div class="carousel__arrow carousel__arrow_left">
      <img
          src="../images/arrow-left.svg"
          alt="arrow left"
      >
    </div>
    <main :class="currentSlider.class">
      <div class="carousel__content">
        <span class="carousel__title">{{ currentSlider.titleText }}</span>
        <span class="carousel__caption">{{ currentSlider.captionText }}</span>
        <button
            class="carousel__button"
            :class="currentSlider.buttonClass"
        >Подробнее
        </button>
      </div>
    </main>


    <div class="carousel__arrow carousel__arrow_right">
      <img
          src="../images/arrow-right.svg"
          alt="arrow right"
      >
    </div>

  </div>
</template>

<script>
export default {
  name: "TheCarousel",
  data() {
    return {
      sliders: [{
        class: "slider-free-parking",
        titleText: "Бесплатная парковка",
        captionText: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        buttonClass: "button_green"
      }, {
        class: "slider-insurance",
        titleText: "Страховка",
        captionText: "Полная страховка автомобиля.",
        buttonClass: "button_blue"
      }],
      currentSliderIndex: 1
    }
  },
  computed: {
    currentSlider() {
      return this.sliders[this.currentSliderIndex];
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/fonts";
@import "../scss/mixins";

.carousel {
  display: inline-flex;
  justify-content: space-between;
  mix-blend-mode: normal;
  width: 100%;
  position: relative;


  &__arrow {
    padding: 0 28px 0 28px;
    width: 8px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &:hover {
      background: rgba(14, 194, 97, 0.2);
    }
  }

  &__arrow_left {
    position: absolute;
    left: 0;
  }

  &__arrow_right {
    position: absolute;
    right: 0;
  }


  main {
    width: 100%;
    background-size: cover;
  }

  .slider-free-parking {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(../images/slider-free-parking.png);
  }

  .slider-insurance {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(../images/slider-insurance.png);
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 237px 100px 0 100px;
  }

  &__title {
    @include roboto-text(500, 40px, $white);
    white-space: normal;
  }

  &__caption {
    @include roboto-text(300, 24px, $gray);
    margin-top: 8px;
    white-space: normal;
  }

  &__button {
    margin-top: 32px;
    white-space: normal;
  }

  .button_green {
    @include button($green-gradient-colors);
  }

  .button_blue {
    @include button($blue-gradient-colors);
  }

}

@media screen and (min-width: 1440px) {

}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .carousel {

    &__arrow {
      padding: 0 12px 0 12px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 237px 64px 0 64px;
    }

    &__title {
      @include roboto-text(500, 32px, $white);
      white-space: normal;
    }

    &__caption {
      @include roboto-text(300, 22px, $gray);
      white-space: normal;
    }

  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .carousel {
    display: none;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .carousel {
    display: none;
  }
}
</style>
