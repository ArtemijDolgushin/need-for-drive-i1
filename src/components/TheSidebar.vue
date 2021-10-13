<template>
  <div
      class="sidebar"
  >
    <img
        class="sidebar__menu"
        src="../images/menu_btn.svg"
        alt="open menu button"
        :style="sidebarMenuActive ? { display: 'none' } : {}"
        @click="toggleMenu"
    >
    <img
        class="sidebar__menu_close"
        src="../images/menu_btn_back.svg"
        alt="close menu button"
        :style="sidebarMenuActive ? {} : { display: 'none' }"
        @click="toggleMenu"
    >
    <span
        class="sidebar__language"
        :class="{'sidebar__language_menu-is-active': sidebarMenuActive}"
        @click="changeLanguage"
    >{{ languages[selectedLanguageIndex] }}</span>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  data() {
    return {
      sidebarMenuActive: false,
      languages: ["Eng", "Рус"],
      selectedLanguageIndex: 0
    }
  },
  methods: {
    toggleMenu() {
      this.sidebarMenuActive = !this.sidebarMenuActive
      this.$emit('toggleMenu')
    },
    changeLanguage() {
      if (this.selectedLanguageIndex + 1 === this.languages.length) {
        this.selectedLanguageIndex = 0
      } else {
        ++this.selectedLanguageIndex
      }
    }
  },
  emits: ['toggleMenu']
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
  align-items: center;

  &__menu {
    margin: 32px 16px 0 16px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    z-index: 5;

    &_close{
      margin: 32px 16px 0 16px;
      width: 32px;
      height: 32px;
      cursor: pointer;
      z-index: 5;
    }
  }

  &__language {
    @include roboto-text(700, 13px, $main-accent);
    cursor: pointer;
    user-select: none;
    padding: 17px 13px 17px 13px;
    margin-bottom: 15px;
    z-index: 5;

    &:hover {
      @include roboto-text(700, 13px, $white);
      border-radius: 100%;
      border: 1px solid $white;
      margin-bottom: 14px;
    }

    &:active {
      @include roboto-text(700, 13px, $main-accent);
      border-radius: 100%;
      border: 1px solid $white;
      margin-bottom: 14px;
    }

    &_menu-is-active {
      display: none;
    }

  }
}


@media screen and (min-width: 1440px) {

}

@media screen and (min-width: 1024px) and (max-width: 1440px) {

}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .sidebar {

    &__menu {
      margin: 32px 22px 0 22px;
      transform: scale(calc(42 / 32), 1);

      &_close{
        width: 43px;
      }
    }

  }
}

@media screen and (min-width: 0) and (max-width: 768px) {
  .sidebar {
    background-color: $white;

    &__menu {
      position: absolute;
      left: 16px;
      top: 16px;
      filter: invert(1);
      margin: 0;

      &_close{
        position: absolute;
        left: 16px;
        top: 16px;
        margin: 0;
      }
    }

    &__language {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-bottom: 0;
      display: none;

      &:hover {
        border: none;
        margin-bottom: 0;
      }

      &:active {
        border: none;
        margin-bottom: 0;
      }

      &_menu-is-active {
        display: block;
      }
    }
  }
}

</style>
