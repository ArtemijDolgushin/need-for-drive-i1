<template>
  <div class="sidebar">
    <img
        class="sidebar__menu"
        src="../images/menu_btn.svg"
    >
    <span class="sidebar__language">Eng</span>
  </div>
</template>

<script>
export default {
  name: "TheSidebar"
}
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/fonts";
@import "../scss/mixins";

.sidebar {
  background-color: $black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 16px 32px 16px;
  align-items: center;

  &__menu {
    width: 32px;
    height: 32px;
  }

  &__language {
    @include roboto-text(700, 13px, $main-accent);

  }
}
</style>
