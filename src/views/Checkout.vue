<template>
  <div>
    <HeaderComponent />
    <CheckOutComponent />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import CheckOutComponent from "@/components/CheckOutComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "FullProject",
  components: {
    CheckOutComponent,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style></style>
