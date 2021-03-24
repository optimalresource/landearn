<template>
  <div>
    <!-- Preloader End -->

    <div id="main-wrapper" class="oxyy-login-register bg-dark">
      <div class="container">
        <div class="row no-gutters min-vh-100 py-5">
          <!-- Welcome Text
      ========================= -->
          <div class="col-lg-7 shadow-lg">
            <div
              class="hero-wrap d-flex align-items-center rounded-lg rounded-right-0 h-100"
            >
              <div class="hero-mask opacity-7 bg-primary"></div>
              <div
                class="hero-bg hero-bg-scroll"
                style="background-image:url('images/login-bg.jpg');"
              ></div>
              <div class="hero-content mx-auto w-100 h-100 d-flex flex-column">
                <div class="row no-gutters">
                  <div class="col-10 col-lg-10 mx-auto">
                    <div class="logo mt-5 mb-5 mb-lg-0">
                      <a href="/" title="Landearn"
                        ><img
                          src="images/full_logo_all_white.png"
                          style="width:150px"
                          alt="logo"
                      /></a>
                    </div>
                  </div>
                </div>
                <div class="row no-gutters my-auto">
                  <div class="col-10 col-lg-10 mx-auto">
                    <h1 class="text-11 text-white mb-3">
                      Not yet a Landearner?
                    </h1>
                    <p class="text-5 text-white line-height-4 mb-4">
                      Fill this simple form to get started!
                    </p>
                    <a
                      class="btn btn-outline-white rounded-pill shadow-none video-btn py-1 px-3 d-inline-flex align-items-center mb-5"
                      href="/"
                      data-src=""
                      data-toggle="modal"
                      data-target="#videoModal"
                      ><span class="mr-2 text-7"
                        ><i class="fas fa-home"></i></span
                      >Home</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Welcome Text End -->

          <!-- Register Form
      ========================= -->
          <div
            class="col-lg-5 shadow-lg d-flex align-items-center rounded-lg rounded-left-0 bg-dark"
          >
            <div class="container my-auto py-5">
              <div class="row">
                <div class="col-11 col-lg-10 mx-auto">
                  <h3 class="text-white text-center mb-4">Sign Up</h3>
                  <form class="form-dark">
                    <div class="form-group">
                      <label class="text-light" for="fullName">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="fullName"
                        required
                        placeholder="Enter your name"
                        v-model="details.fullname"
                      />
                    </div>
                    <div class="form-group">
                      <label class="text-light" for="emailAddress"
                        >Email Address</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="emailAddress"
                        required
                        placeholder="Enter your email"
                        v-model="details.email"
                      />
                    </div>
                    <div class="form-group">
                      <label class="text-light" for="loginPassword"
                        >Password</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="loginPassword"
                        required
                        placeholder="Enter password"
                        v-model="details.password"
                      />
                    </div>
                    <div class="form-group">
                      <label class="text-light" for="ref_code"
                        >Referral Code</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="ref_code"
                        placeholder="Ref code is optional, but highly encouraged"
                        v-model="details.ref_code"
                      />
                    </div>
                    <div class="form-group">
                      <div
                        class="form-check text-2 custom-control custom-checkbox"
                      >
                        <input
                          id="agree"
                          name="agree"
                          class="custom-control-input"
                          type="checkbox"
                          v-model="agreeSelected"
                          required
                        />
                        <label
                          class="custom-control-label text-light"
                          for="agree"
                          >I agree to the <a href="#">Terms</a> and
                          <a href="#">Privacy Policy</a>.</label
                        >
                      </div>
                    </div>
                    <button
                      class="btn btn-primary btn-block my-4"
                      @click.prevent="signup"
                    >
                      Sign Up
                    </button>
                  </form>
                  <div class="d-flex align-items-center my-3">
                    <hr class="flex-grow-1 border-dark" />
                    <span class="mx-2 text-2 text-muted"
                      >Or with Social Profile</span
                    >
                    <hr class="flex-grow-1 border-dark" />
                  </div>
                  <div class="d-flex  flex-column align-items-center mb-4">
                    <ul class="social-icons social-icons-circle">
                      <li class="social-icons-facebook">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-original-title="Log In with Facebook"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li class="social-icons-twitter">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-original-title="Log In with Twitter"
                          ><i class="fab fa-twitter"></i
                        ></a>
                      </li>
                      <li class="social-icons-google">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-original-title="Log In with Google"
                          ><i class="fab fa-google"></i
                        ></a>
                      </li>
                      <li class="social-icons-linkedin">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-original-title="Log In with Linkedin"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <p class="text-2 text-center text-light">
                    Already have an account?
                    <a class="btn-link" href="/login">Sign In</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Register Form End -->
        </div>
      </div>
    </div>

    <!-- Video Modal
========================= -->
    <!-- <div class="modal fade" id="videoModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent border-0">
          <button
            type="button"
            class="close text-white opacity-10 ml-auto mr-n3 font-weight-400"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body p-0">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                id="video"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Video Modal end -->

    <!-- Styles Switcher -->
    <!-- <div id="styles-switcher" class="left">
      <h5>Color Switcher</h5>
      <hr />
      <ul class="mb-0">
        <li class="blue" data-toggle="tooltip" title="Blue" data-path="#"></li>
        <li
          class="indigo"
          data-toggle="tooltip"
          title="Indigo"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-indigo.css"
        ></li>
        <li
          class="purple"
          data-toggle="tooltip"
          title="Purple"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-purple.css"
        ></li>
        <li
          class="pink"
          data-toggle="tooltip"
          title="Pink"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-pink.css"
        ></li>
        <li
          class="red"
          data-toggle="tooltip"
          title="Red"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-red.css"
        ></li>
        <li
          class="orange"
          data-toggle="tooltip"
          title="Orange"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-orange.css"
        ></li>
        <li
          class="yellow"
          data-toggle="tooltip"
          title="Yellow"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-yellow.css"
        ></li>
        <li
          class="teal"
          data-toggle="tooltip"
          title="Teal"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-teal.css"
        ></li>
        <li
          class="green"
          data-toggle="tooltip"
          title="Green"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-green.css"
        ></li>
        <li
          class="cyan"
          data-toggle="tooltip"
          title="Cyan"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-cyan.css"
        ></li>
        <li
          class="brown"
          data-toggle="tooltip"
          title="Brown"
          data-path="http://demo.harnishdesign.net/html/oxyy/css/color-brown.css"
        ></li>
      </ul>
      <button class="btn switcher-toggle"><i class="fas fa-cog"></i></button>
    </div> -->
  </div>
</template>
<script>
import Vue from "vue";
import LoadScript from "vue-plugin-load-script";
// import axios from "axios";
Vue.use(LoadScript);
export default {
  data() {
    return {
      details: {
        fullname: "",
        email: "",
        password: "",
        ref_code: "",
      },
      isHidden: true,
      successResponse: false,
      beforeResponse: false,
      onLine: navigator.onLine,
      showBackOnline: false,
      agreeSelected: "",
    };
  },
  methods: {
    signup: function() {
      // this.$toasted.success('hello billo');

      if (this.details.fullname == "") {
        this.$toasted.error("Please enter your full name");
        return false;
      }
      if (this.details.email == "") {
        this.$toasted.error("Please enter your email");
        return false;
      }
      if (this.details.password == "") {
        this.$toasted.error("Please enter a password");
        return false;
      }
      if (!this.validateEmail(this.details.email)) {
        this.$toasted.error("Please enter a valid email");
        return false;
      }
      if (this.agreeSelected == "") {
        this.$toasted.error(
          "Please accept the terms and conditions to proceed"
        );
        return false;
      }

      if (!this.onLine) {
        this.$toasted.error("Please check your internet connection");
        return false;
      }

      this.beforeResponse = true;

      this.$store
        .dispatch("registerAccount", {
          details: this.details,
        })
        .then((response) => {
          console.log(response);
          if (response.status == "200") {
            this.$toasted.success("Your registration is successful");
            this.$router.push({ name: "Dashboard" });
          } else {
            this.$toasted.error(response.data.message);
            return false;
          }
        })
        .catch((error) => {
          if (typeof error === "object" && error !== null) {
            for (const property in error) {
              this.$toasted.error(error[property]);
            }
          } else {
            this.$toasted.error(error);
          }
        });
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },
  },
  mounted() {
    Vue.loadScript("../minified/switcher.min.js");
    Vue.loadScript("../minified/theme.js");
  },
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    },

    beforeResponse() {
      if (this.beforeResponse) {
        this.$toasted.info("Your form is being submitted, please wait");
      }
    },

    successResponse() {
      if (this.successResponse == 200) {
        this.$toasted.success("Your registration is successfull");
        this.step++;
        this.successResponse = false;
        this.beforeResponse = false;
      }
    },
  },
};
</script>

<style scoped>
@import "../minified/bootstrap.min.css";
@import "../minified/register_login.css";

.btn {
  font-size: 1.5rem !important;
}

.rounded-pill {
  background: #000 !important;
  color: #fff !important;
}
</style>
