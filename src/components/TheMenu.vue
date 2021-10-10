<template>
  <div class="menu">
    <div
        class="menu__overlay"
        :class="{'menu__overlay-disabled': !sidebarMenuActive}"
    ></div>
    <div
        class="menu__content"
        :class="{'menu__content-disabled': !sidebarMenuActive}"
    >
      <ul>
        <li>
          ПАРКОВКА
        </li>
        <li>
          СТРАХОВКА
        </li>
        <li>
          БЕНЗИН
        </li>
        <li>
          ОБСЛУЖИВАНИЕ
        </li>
      </ul>
      <div class="menu__links">
        <img
            class="menu__icon"
            src="../../../need-for-drive-i1/src/images/Telegram_white.svg"
            alt="telegram icon"
        >
        <img
            class="menu__icon"
            src="../../../need-for-drive-i1/src/images/Facebook_white.svg"
            alt="facebook icon"
        >
        <img
            class="menu__icon"
            src="../../../need-for-drive-i1/src/images/Instagram_white.svg"
            alt="instagram icon"
        >
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "TheMenu",
  props: {
    sidebarMenuActive: Boolean
  }
}
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/fonts";
@import "../scss/mixins";


.menu {

  ul {
    display: inline-flex;
    flex-direction: column;

    li {
      @include roboto-text(500, 32px, $white);
      margin-bottom: 29px;
      cursor: pointer;
      display: inline;

      &:hover {
        @include roboto-text(500, 32px, $main-accent);
      }
    }
  }

  &__overlay {
    background-color: $black;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 64px;
    opacity: 0.9;
    right: 0;
    transition: opacity 1s;

    &-disabled {
      opacity: 0;
      z-index: -10;
    }
  }

  &__content {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: $black;
    padding-left: 64px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 64px;
    right: calc(100vw - 683px - 64px);
    overflow: hidden;
    transition: transform 1s, opacity 1s;
    z-index: 100;

    &-disabled {
      transform: translate(-110%);
      opacity: 0;
      z-index: -10;
    }
  }

  &__links {
    display: flex;
  }

  &__icon {
    width: 32px;
    height: 32px;
    margin-right: 24px;
    cursor: pointer;

    &:hover {
      filter: brightness(0) saturate(100%) invert(49%) sepia(97%) saturate(1088%) hue-rotate(107deg) brightness(97%) contrast(89%);
    }
  }
}

@media screen and (min-width: 1440px) {

}

@media screen and (min-width: 1024px) and (max-width: 1439px) {

}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .menu {
    &__content {
      right: 0;
    }
  }

}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .menu {
    &__content {
      right: 0;
    }
  }
}
</style>
