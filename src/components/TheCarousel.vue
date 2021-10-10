<template>
  <div class="carousel">

    <div class="carousel__arrow-left">
      <img
          src="../images/arrow-left.svg"
          alt="arrow left"
      >
    </div>

    <main>
      <span class="carousel__title">Бесплатная парковка</span>
      <span class="carousel__caption">Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая
        ПДД, а также в аэропортах.</span>
      <button class="carousel__button_green">Подробнее</button>
    </main>

    <div class="carousel__arrow-right">
      <img
          src="../images/arrow-right.svg"
          alt="arrow right"
      >
    </div>

  </div>
</template>

<script>
export default {
  name: "TheCarousel"
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


  &__arrow {
    padding: 0 28px 0 28px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &-left {
      position: absolute;
      left: 0;
    }

    &-right {
      position: absolute;
      right: 0;
    }

    &:hover {
      background: rgba(14, 194, 97, 0.2);
    }
  }


  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 32px 0 32px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(../images/slider-free-parking.png) no-repeat;

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

  &__button_green {
    @include button($green-gradient-colors);
    margin-top: 32px;
    white-space: normal;
  }

}

@media screen and (min-width: 1440px) {

}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .carousel {

    &__arrow {
      padding: 0 12px 0 12px;
    }

    &__title {
      @include roboto-text(500, 32px, $white);
      white-space: normal;
    }

    &__caption {
      @include roboto-text(300, 22px, $gray);
      white-space: normal;
    }

    &__button_green {
      @include button($green-gradient-colors);
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
