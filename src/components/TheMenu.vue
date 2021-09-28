<template>
  <div class="menu">
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
</template>

<script>
export default {
  name: "TheMenu"
}
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/fonts";
@import "../scss/mixins";

.menu {
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
  right: 611px;
  transition: transform 0.25s, opacity 0.25s, width 0.25s, padding 0.25s;
  overflow: hidden;
  opacity: 0.9;

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

  &__links {
    display: flex;
  }

  &__icon {
    width: 32px;
    height: 32px;
    margin-right: 24px;

    &:hover {
      filter: brightness(0) saturate(100%) invert(49%) sepia(97%) saturate(1088%) hue-rotate(107deg) brightness(97%) contrast(89%);
    }
  }
}
</style>
