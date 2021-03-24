<template>
  <div class="contact">
    <HeaderComponent />
    <ContactComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  name: "Home",
  components: {
    FooterComponent,
    HeaderComponent,
    ContactComponent,
  },
  data: function() {},
  methods: {},
  mounted() {},
};
</script>

<style scoped></style>
