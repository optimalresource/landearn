<template>
  <div>
    <HeaderComponent />
    <SponsorsComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SponsorsComponent from "@/components/SponsorsComponent.vue";
export default {
  name: "project",
  components: {
    HeaderComponent,
    FooterComponent,
    SponsorsComponent,
  },
};
</script>
<style scoped></style>
