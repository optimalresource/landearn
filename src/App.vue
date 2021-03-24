<template>
  <div id="app">
    <div class="spinner-container" v-show="overlay">
      <jumper
        class="spinner-ball"
        :color="color"
        :background="color"
        :size="size"
      ></jumper>
    </div>

    <VueToastr ref="toastr" />

    <router-view />
  </div>
</template>

<script>
import Jumper from "vue-loading-spinner/src/components/Jumper.vue";
import VueToastr from "vue-toastr";

export default {
  components: {
    Jumper,
    VueToastr,
  },
  data: function() {
    return {
      color: "#fff",
      overlay: true,
      size: "100px",
    };
  },
  methods: {
    forceRerender() {
      this.$nextTick(() => {
        this.overlay = false;
      });
    },
  },
  mounted() {
    setTimeout(this.forceRerender, 3000);

    // if (!localStorage.getItem("items")) {
    //   localStorage.setItem("items", []);
    // }
    // localStorage.removeItem("items");
  },
};
</script>

<style lang="scss">
.spinner-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: #48a8fc;
  opacity: 0.9;
  display: -webkit-flex;
  display: flex;
  webkit-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  webkit-align-items: center;
  align-items: center;
  webkit-justify-content: center;
  justify-content: center;
}
.spinner-ball {
  display: -webkit-flex;
  display: flex;
  webkit-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  webkit-align-items: center;
  align-items: center;
  webkit-justify-content: center;
  justify-content: center;
  color: #48a8fc;
}
</style>
