<template>
  <section
      class="start-screen"
  >
    <the-sidebar @toggle-menu="sidebarMenuActive = !sidebarMenuActive"></the-sidebar>
    <the-menu :sidebarMenuActive="sidebarMenuActive"/>
    <the-promo/>
    <the-carousel/>
  </section>
</template>

<script>
import TheSidebar from "./TheSidebar";
import ThePromo from "./ThePromo";
import TheMenu from "../../../need-for-drive-i1/src/components/TheMenu";
import TheCarousel from "./TheCarousel";

export default {
  name: "StartScreen",
  components: {
    TheCarousel,
    TheMenu,
    TheSidebar,
    ThePromo
  },
  data() {
    return {
      sidebarMenuActive: false
    }
  }
}
</script>

<style lang="scss" scoped>

.start-screen {
  height: 100vh;
  width: 100%;
  display: inline-flex;
}


</style>
