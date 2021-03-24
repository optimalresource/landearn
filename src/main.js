import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToastr from "vue-toastr";
import Toasted from "vue-toasted";
import VueCountdownTimer from "vuejs-countdown-timer";
import VueClipboard from "vue-clipboard2";
// import HeaderComponent from "@/components/HeaderComponent.vue";
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
Vue.use(VueCountdownTimer);
Vue.use(VueToastr, {
  defaultTimeout: 10000,
  defaultProgressBar: false,
  defaultProgressBarValue: 0,
  defaultPosition: "toast-top-center",
  defaultCloseOnHover: false,
  defaultClassNames: ["animated", "zoomInDown"],
});

Vue.use(Toasted, {
  duration: 4000,
  position: "top-center",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // data: {
  //   cart: "Smoking weed",
  // },
  // template: '<HeaderComponent :cart="cart" />',
  // components: { HeaderComponent },
  render: (h) => h(App),
}).$mount("#app");
