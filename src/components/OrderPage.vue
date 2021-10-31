<template>
  <div class="order-page">
    <header>
      <span class="order-page__logo">Need for drive</span>

      <span class="order-page__map">
        <img
            class="order-page__map-image"
            src="../assets/images/marker.svg"
            alt="map marker"
        >
        Ульяновск
      </span>
    </header>
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
    <main>
      <router-view/>

      <div class="order-page__info">
        <div class="order-page__info__caption">
          Ваш заказ:
        </div>
        <span class="order-page__info__location">
          Пункт выдачи:
        </span>
        <span class="order-page__info__model">
          Модель:
        </span>
        <span class="order-page__info__color">
          Цвет:
        </span>
        <span class="order-page__info__duration">
          Длительность аренды:
        </span>
        <span class="order-page__info__tariff">
          Тариф:
        </span>
        <span class="order-page__info__full">
          Полный бак:
        </span>
        <div class="order-page__info__price">
          Цена:
        </div>
        <button class="order-page__info__button_main-accent">Заказать</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "OrderPage"
}
</script>

<style scoped lang="scss">

.order-page {
  display: inline-flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 32px 64px 32px 64px;
  }

  &__logo {
    @include roboto-text(700, 30px, $main-accent);
  }

  &__map {
    @include roboto-text(400, 14px, $gray);
    display: inline-flex;
    align-items: center;
  }

  &__map-image {
    margin-right: 9px;
  }

  &__progress-bar {
    ul {
      display: flex;
      gap: 16px;
      padding: 8px 0 8px 64px;
      border-top: solid;
      border-bottom: solid;
      border-width: 1px;
      border-color: $gray-light;

      li {
        @include roboto-text(700, 14px, $main-accent);
      }
    }
  }

  main {
    display: flex;
  }

  &__info {
    border-left: solid;
    border-width: 1px;
    border-color: $gray-light;
    padding: 32px 64px 0 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    &__caption {
      align-self: flex-end;
      @include roboto-text(500, 18px, $black);
    }

    span {
      @include roboto-text(300, 14px, $black);
    }

    &__price {
      @include roboto-text(500, 16px, $black);
    }

    &__button_main-accent {
      @include button($main-gradient-colors);
    }
  }

}


</style>
