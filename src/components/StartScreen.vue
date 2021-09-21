<template>
  <section class="start-screen">
    <the-sidebar/>
    <the-promo/>
  </section>
</template>

<script>
import TheSidebar from "./TheSidebar";
import ThePromo from "./ThePromo";

export default {
  name: "StartScreen",
  components: {
    TheSidebar,
    ThePromo
  }
}
</script>

<style lang="scss" scoped>


.start-screen {
  height: 100vh;
  display: inline-flex;
}

</style>
