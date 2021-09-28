<template>
  <div class="carousel">

    <div class="carousel__arrow">
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

    <div class="carousel__arrow">
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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(../images/slider-free-parking.png) no-repeat;
  mix-blend-mode: normal;


  &__arrow {
    padding: 0 28px 0 28px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &:hover {
      background: rgba(14, 194, 97, 0.2);
    }
  }


  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 200px;
    padding: 0 32px 0 32px;
  }

  &__title {
    @include roboto-text(500, 40px, $white);
  }

  &__caption {
    @include roboto-text(300, 24px, $gray);
    margin-top: 8px;
  }

  &__button_green {
    @include button($green-gradient-colors);
    margin-top: 32px;
  }

}
</style>
