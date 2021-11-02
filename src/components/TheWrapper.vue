<template>
  <section class="wrapper">
    <the-sidebar @toggle-menu="sidebarMenuActive = !sidebarMenuActive"/>
    <the-menu :sidebarMenuActive="sidebarMenuActive"/>
    <router-view/>
  </section>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";
import TheMenu from "@/components/TheMenu";

export default {
  name: "TheWrapper",
  components: {
    TheMenu,
    TheSidebar
  },
  data() {
    return {
      sidebarMenuActive: false
    }
  }
}
</script>

<style lang="scss">

html, body, #app {
  height: 100%;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: inherit;
}

.wrapper {
  height: 100%;
  width: 100%;
  display: inline-flex;
}
</style>
