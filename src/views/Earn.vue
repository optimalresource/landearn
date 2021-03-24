<template>
  <div>
    <HeaderComponent />
    <EarnComponent />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import EarnComponent from "@/components/EarnComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "Earn",
  components: {
    HeaderComponent,
    FooterComponent,
    EarnComponent,
  },
};
</script>

<style></style>
