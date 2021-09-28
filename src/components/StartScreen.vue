<template>
  <section
      class="start-screen"
      :style="sidebarMenuActive ? { background: 'rgb(0,0,0)', 'justify-content': 'space-between' } : {}"
  >
    <the-sidebar @toggle-menu="sidebarMenuActive = !sidebarMenuActive"></the-sidebar>
    <the-menu
        :style="sidebarMenuActive ? { } : { opacity:'0', transform: 'translate(-110%)', width:'0', padding:'0'}"
    />
    <the-promo :style="sidebarMenuActive ? {visibility: 'hidden'} : {}"/>
    <the-carousel :style="sidebarMenuActive ? { } : { }"/>
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
