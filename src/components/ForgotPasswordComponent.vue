<template>
  <div>
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
                    <h1 class="text-11 text-white mb-3">Hey there!</h1>
                    <p class="text-5 text-white line-height-4 mb-4">
                      Get access to your Dashboard, Orders and Recommendations.
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

          <!-- OTP Form
      ========================= -->
          <div
            class="col-lg-5 shadow-lg d-flex align-items-center rounded-lg rounded-left-0 bg-dark"
          >
            <div class="container my-auto py-5">
              <div class="row">
                <div class="col-11 col-lg-10 mx-auto">
                  <h3 class="text-white text-center mb-4">Password Recovery</h3>
                  <!-- <p class="text-center">
                    <img
                      class="img-fluid"
                      src="images/otp-icon-light.png"
                      alt="verification"
                    />
                  </p> -->
                  <p class="text-white-50 text-center mb-4">
                    Please enter your email address, an OTP will be sent to your
                    email with which you can use to change your password and
                    gain access to your account again.
                  </p>
                  <!-- <p class="text-white-50 text-center mb-4">
                    Please enter the OTP (one time password) to verify your
                    account. A Code has been sent to
                    <span class="text-light">*******179</span>
                  </p> -->
                  <form id="otp-screen" class="form-dark" method="post">
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
                    <!-- <label class="text-light mb-3">Enter 4 digit code</label>
                    <div class="form-row">
                      <div class="col form-group">
                        <input
                          type="text"
                          class="form-control text-center text-6 py-2"
                          maxlength="1"
                          required
                          autocomplete="off"
                        />
                      </div>
                      <div class="col form-group">
                        <input
                          type="text"
                          class="form-control text-center text-6 py-2"
                          maxlength="1"
                          required
                          autocomplete="off"
                        />
                      </div>
                      <div class="col form-group">
                        <input
                          type="text"
                          class="form-control text-center text-6 py-2"
                          maxlength="1"
                          required
                          autocomplete="off"
                        />
                      </div>
                      <div class="col form-group">
                        <input
                          type="text"
                          class="form-control text-center text-6 py-2"
                          maxlength="1"
                          required
                          autocomplete="off"
                        />
                      </div>
                    </div> -->
                    <button
                      class="btn btn-primary btn-block my-4"
                      type="submit"
                    >
                      Verify
                    </button>
                  </form>
                  <p class="text-2 text-center text-light mb-0">
                    Didn't get the code?
                    <a class="btn-link" href="#">Resend it</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- OTP Form End -->
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
Vue.use(LoadScript);
export default {
  data() {
    return {
      details: {
        email: "",
      },
    };
  },
  mounted() {
    Vue.loadScript("../minified/switcher.min.js");
    Vue.loadScript("../minified/theme.js");
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
