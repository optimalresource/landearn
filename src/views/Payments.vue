<template>
  <div>
    <HeaderComponent />
    <Payment />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import Payment from "@/components/Payment.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    Payment,
  },
};
</script>

<style></style>
