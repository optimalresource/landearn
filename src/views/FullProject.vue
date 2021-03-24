<template>
  <div>
    <HeaderComponent />
    <FullProjectComponent />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import FullProjectComponent from "@/components/FullProjectComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "FullProject",
  components: {
    FullProjectComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style></style>
