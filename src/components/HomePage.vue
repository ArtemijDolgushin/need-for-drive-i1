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
import TheSidebar from "@/components/TheSidebar";
import ThePromo from "@/components/ThePromo";
import TheMenu from "@/components/TheMenu";
import TheCarousel from "@/components/TheCarousel";

export default {
  name: "HomePage",
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

<style lang="scss">
.start-screen {
  height: 100vh;
  width: 100%;
  display: inline-flex;
}


</style>
