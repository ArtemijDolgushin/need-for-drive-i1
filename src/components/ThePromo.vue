<template>
  <div class="promo">
    <header>
      <span class="promo__logo">Need for drive</span>

      <span class="promo__map">
        <img
            class="promo__map-image"
            src="../images/marker.svg"
            alt="map marker"
        >
        Ульяновск
      </span>
    </header>
    <main>
      <span class="promo__title">Каршеринг</span>
      <span class="promo__logo_big">Need for drive</span>
      <span class="promo__caption">Поминутная аренда авто твоего города</span>
      <button class="promo__button_main-accent">Забронировать</button>
    </main>
    <footer>
      <span class="promo__copyright">© 2016-2019 «Need for drive»</span>
      <span class="promo__phone-number">8-800-555-35-35</span>
    </footer>

  </div>
</template>

<script>
export default {
  name: "ThePromo"
}
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/fonts";
@import "../scss/mixins";


.promo {
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  justify-content: space-between;
  min-width: 573px;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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


  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__title {
    @include roboto-text(700, 70px, $black);
  }

  &__logo_big {
    @include roboto-text(700, 70px, $main-accent);
    margin-top: 4px;
  }

  &__caption {
    @include roboto-text(300, 26px, $gray);
    margin-top: 34px;
  }

  &__button_main-accent {
    @include button($main-gradient-colors);
    margin-top: 60px;
  }


  footer {
    display: flex;
    justify-content: space-between;
  }

  &__copyright {
    @include roboto-text(400, 13px, $gray);
  }

  &__phone-number {
    @include roboto-text(400, 13px, $black);
  }
}

@media screen and (min-width: 1440px) {
  .promo {
    padding: 32px 64px 32px 64px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {

}

@media screen and (min-width: 768px) and (max-width: 1024px) {
}

@media screen and (min-width: 0) and (max-width: 768px) {
  .promo {
    padding: 0;
    min-width: 0;

    header {
      flex-direction: column;
      align-items: flex-end;
      padding: 16px 16px 0 0;
    }

    &__logo {
      @include roboto-text(700, 30px, $main-accent);
      white-space: normal;
    }

    &__map {
      margin-top: 5px;
    }

    &__map-image {
      margin-right: 9px;
    }

    &__title {
      @include roboto-text(700, 32px, $black);
      white-space: normal;
      padding-left: 16px;
    }

    &__logo_big {
      @include roboto-text(700, 32px, $main-accent);
      white-space: normal;
      padding-left: 16px;
    }

    &__caption {
      @include roboto-text(300, 18px, $gray);
      white-space: normal;
      padding-left: 16px;
    }

    &__button_main-accent {
      @include button($main-gradient-colors);
      border-radius: 0;
      align-self: stretch;
    }

    footer {
      padding: 16px;
      flex-direction: column-reverse;
      background-color: $black;
      align-items: flex-end;
    }

    &__copyright {
      @include roboto-text(400, 13px, $main-accent);
      margin-top: 8px;
    }

    &__phone-number {
      @include roboto-text(400, 13px, $gray-light);
    }
  }
}
</style>
