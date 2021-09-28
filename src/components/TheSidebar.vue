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
        class="sidebar__menu"
        src="../../../need-for-drive-i1/src/images/menu_btn_back.svg"
        alt="close menu button"
        :style="sidebarMenuActive ? {} : { display: 'none' }"
        @click="toggleMenu"
    >
    <span
        class="sidebar__language"
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
  }

  &__language {
    @include roboto-text(700, 13px, $main-accent);
    cursor: pointer;
    user-select: none;
    padding: 17px 13px 17px 13px;
    margin-bottom: 15px;

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

  }
}

</style>
