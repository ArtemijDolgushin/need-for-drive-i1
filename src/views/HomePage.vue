<template>
    <the-promo/>
    <the-carousel/>
</template>

<script>
import ThePromo from "@/components/ThePromo";
import TheCarousel from "@/components/TheCarousel";

export default {
  name: "HomePage",
  components: {
    TheCarousel,
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
</style>
