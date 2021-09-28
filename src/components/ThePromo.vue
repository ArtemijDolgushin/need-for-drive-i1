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
  padding: 32px 64px 32px 64px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

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

  }

  &__map-image {
    margin-left: 275px;
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
    margin-left: 284px;
  }
}
</style>
