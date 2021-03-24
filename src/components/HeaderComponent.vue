<template>
  <header class="fixed-top" data-menu-anima="fade-bottom">
    <div
      class="navbar navbar-default mega-menu-fullwidth navbar-fixed-top"
      role="navigation"
    >
      <div class="navbar-mini scroll-hide" style="">
        <div class="container">
          <div class="nav navbar-nav navbar-left">
            <span><i class="im-phone-2"></i>+234-907-128-4144</span>
            <hr />
            <span><i class="im-envelope"></i>hello@landearn.com</span>
            <hr />
            <span class="calendar-head"
              ><i class="im-calendar-4"></i> Mon - Fri: 9:00 - 18:00 WAT
            </span>
          </div>
          <div class="nav navbar-nav navbar-right">
            <!-- <ul class="nav navbar-nav lan-menu">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                    ><img src="images/en.png" alt="flag" />EN
                    <span class="caret"></span
                  ></a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#"
                        ><img src="images/it.png" alt="flag" />IT</a
                      >
                    </li>
                  </ul>
                </li>
              </ul> -->
            <form class="navbar-form" role="search">
              <!-- <div class="input-group">
                <input class="form-control" placeholder="Search for..." />
                <span class="input-group-btn">
                  <button class="btn btn-default" type="submit">
                    <i class="fas fa-play"></i>
                  </button>
                </span>
              </div> -->
              <div class="">
                <a
                  target="_blank"
                  href="https://www.facebook.com/landearnhomesltd"
                  data-social="share-facebook"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <i class="fa fa-facebook tiny-text"></i>
                </a>
                <a
                  target="_blank"
                  href="#"
                  data-social="share-instagram"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                >
                  <i class="fab fa-instagram-square tiny-text"></i>
                  <!-- <i class="fab fa-instagram text-s circle"></i> -->
                </a>
                <a
                  target="_blank"
                  href="#"
                  data-social="share-linkedin"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="LinkedIn"
                >
                  <i class="fa fa-linkedin tiny-text"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="navbar navbar-main">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle">
              <i class="fa fa-bars"></i>
            </button>

            <a class="navbar-brand" href="/">
              <img class="logo-default" src="images/full_logo.png" alt="logo" />
              <img class="logo-retina" src="images/full_logo.png" alt="logo" />
            </a>
            <CartComponent class="floated-right-cart" />
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  >Pages <span class="caret"></span
                ></a>
                <ul class="dropdown-menu multi-level">
                  <li v-if="!loggedIn"><a href="/login">Login</a></li>
                  <li v-if="!loggedIn"><a href="/register">Register</a></li>
                  <li class="dropdown dropdown-submenu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                      >Company</a
                    >
                    <ul class="dropdown-menu">
                      <li><a href="/about">About us</a></li>
                      <li><a href="/history">History</a></li>
                      <li><a href="partners">Partners</a></li>
                      <li><a href="/career">Careers</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="/project">Projects</a>
                  </li>
                  <li class="dropdown dropdown-submenu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                      >Services</a
                    >
                    <ul class="dropdown-menu">
                      <li><a href="">Estate Management</a></li>
                      <li><a href="">Property Consultant</a></li>
                      <li><a href="">Estate Development</a></li>
                      <li><a href="">Property Acquisition</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li class="dropdown dropdown-submenu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                      >Other</a
                    >
                    <ul class="dropdown-menu">
                      <li><a href="/site">Blog</a></li>
                      <li><a href="/site">Faq</a></li>
                      <li><a href="/team">Team</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="dropdown how-to-earn">
                <a href="/earn" role="button">How to earn</a>
              </li>

              <li class="dropdown" v-if="loggedIn">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  >Dashboard Links <span class="caret"></span
                ></a>
                <ul class="dropdown-menu multi-level">
                  <li><a href="/dashboard">My dashboard</a></li>

                  <li><a href="/login">Account settings</a></li>

                  <li><a href="/register">My referrals</a></li>

                  <li><a href="/logout">Logout</a></li>
                </ul>
              </li>
              <li class="small-link">
                <a href="/sponsors" role="button">Sponsor a project</a>
              </li>
              <li class="small-link">
                <a href="/projects" role="button">Buy a land</a>
              </li>
            </ul>
            <div class="nav navbar-nav navbar-right">
              <div class="custom-area">
                <a href="/sponsors" class="btn btn-sm">Sponsor a project</a>
              </div>
              <div class="custom-area">
                <a href="/projects" class="btn btn-sm">Buy a land</a>
              </div>
              <div class="custom-area">
                <!-- <a href="#" class="btn btn-sm cart"
                  ><img
                    src="images/cart.svg"
                    alt="My cart"
                    height="27"
                    width="27"
                /></a> -->
                <CartComponent />
              </div>

              <!-- <li class="caption-content">
                  <a
                    href="#"
                    class="search-toggle dropdown-toggle d-flex align-items-center"
                    id="dropdownMenuButton3"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/user/01.jpg"
                      class="avatar-40 img-fluid rounded"
                      alt="user"
                    />
                  </a>
                  <div
                    class="iq-sub-dropdown dropdown-menu user-dropdown"
                    aria-labelledby="dropdownMenuButton3"
                  >
                    <div class="card m-0">
                      <div class="card-body p-0">
                        <div class="py-3">
                          <a
                            href="../app/user-profile.html"
                            class="iq-sub-card"
                          >
                            <div class="media align-items-center">
                              <i class="ri-user-line mr-3"></i>
                              <h6>Account Settings</h6>
                            </div>
                          </a>
                          <a
                            href="page-calendar-connections.html"
                            class="iq-sub-card"
                          >
                            <div class="media align-items-center">
                              <i class="ri-calendar-line mr-3"></i>
                              <h6>Calender Connections</h6>
                            </div>
                          </a>
                          <a href="page-users.html" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="ri-group-line mr-3"></i>
                              <h6>Users</h6>
                            </div>
                          </a>
                          <a href="privacy-policy.html" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="ri-lock-line mr-3"></i>
                              <h6>Privacy &amp; Security Settings</h6>
                            </div>
                          </a>
                          <a
                            href="#popup1"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            class="iq-sub-card"
                          >
                            <div class="media align-items-center">
                              <i class="ri-links-line mr-3"></i>
                              <h6>Share Your Link</h6>
                            </div>
                          </a>
                        </div>
                        <a
                          class="right-ic p-3 border-top btn-block position-relative text-center"
                          href="/logout"
                          role="button"
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </li> -->

              <!-- <div>
                <a href="#" class="btn btn-sm text-center"
                  ><i class="fas fa-cart-plus"></i>
                  <span class="bg-primary"></span
                ></a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CartComponent from "@/components/CartComponent.vue";
export default {
  name: "HeaderComponent",
  components: {
    CartComponent,
  },
  // props: {
  //   cart: String,
  // },
  data() {
    return {
      isHidden: true,
      successResponse: false,
      beforeResponse: false,
      onLine: navigator.onLine,
      showBackOnline: false,
    };
  },
  created() {
    let ckeditor = document.createElement("link");
    ckeditor.setAttribute("href", "minified/style.min.css");
    ckeditor.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor);

    let ckeditor2 = document.createElement("link");
    ckeditor2.setAttribute(
      "href",
      "/assets/vendor/%40fortawesome/fontawesome-free/css/all.min.css"
    );
    ckeditor2.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor2);

    if (
      this.$route.name == "Home" ||
      this.$route.name == "Login" ||
      this.$route.name == "ForgotPassword" ||
      this.$route.name == "Register"
    ) {
      let ckeditor56 = document.createElement("script");
      ckeditor56.setAttribute("src", "/minified/script.min.js");
      document.body.appendChild(ckeditor56);
    }

    if (
      this.$route.name != "Home" &&
      this.$route.name != "Login" &&
      this.$route.name != "ForgotPassword" &&
      this.$route.name != "Register"
    ) {
      // let ckeditor40 = document.createElement("link");
      // ckeditor40.setAttribute(
      //   "href",
      //   "/HTWF/scripts/bootstrap/css/bootstrap.css"
      // );
      // ckeditor40.setAttribute("rel", "stylesheet");
      // document.head.appendChild(ckeditor40);

      let ckeditor41 = document.createElement("link");
      ckeditor41.setAttribute("href", "/HTWF/css/content-box.css");
      ckeditor41.setAttribute("rel", "stylesheet");
      document.head.appendChild(ckeditor41);

      if (this.$route.name != "Contact") {
        let ckeditor42 = document.createElement("link");
        ckeditor42.setAttribute("href", "/HTWF/css/image-box.css");
        ckeditor42.setAttribute("rel", "stylesheet");
        document.head.appendChild(ckeditor42);
      }

      let ckeditor43 = document.createElement("link");
      ckeditor43.setAttribute("href", "/HTWF/css/animations.css");
      ckeditor43.setAttribute("rel", "stylesheet");
      document.head.appendChild(ckeditor43);

      let ckeditor44 = document.createElement("link");
      ckeditor44.setAttribute("href", "/HTWF/css/components.css");
      ckeditor44.setAttribute("rel", "stylesheet");
      document.head.appendChild(ckeditor44);

      if (this.$route.name == "Contact") {
        let ckeditor59 = document.createElement("link");
        ckeditor59.setAttribute("href", "/HTWF/scripts/php/contact-form.css");
        ckeditor59.setAttribute("rel", "stylesheet");
        document.head.appendChild(ckeditor59);
      }

      let ckeditor45 = document.createElement("link");
      ckeditor45.setAttribute(
        "href",
        "/HTWF/scripts/flexslider/flexslider.css"
      );
      ckeditor45.setAttribute("rel", "stylesheet");
      document.head.appendChild(ckeditor45);

      if (this.$route.name == "Contact") {
        let ckeditor60 = document.createElement("link");
        ckeditor60.setAttribute("href", "/HTWF/scripts/social.stream.css");
        ckeditor60.setAttribute("rel", "stylesheet");
        document.head.appendChild(ckeditor60);
      }

      let ckeditor46 = document.createElement("link");
      ckeditor46.setAttribute("href", "/skin.css");
      ckeditor46.setAttribute("rel", "stylesheet");
      document.head.appendChild(ckeditor46);

      let ckeditor47 = document.createElement("script");
      ckeditor47.setAttribute("src", "/HTWF/scripts/jquery.min.js");
      document.head.appendChild(ckeditor47);
      // let ckeditor56 = document.createElement("script");
      // ckeditor56.setAttribute("src", "/minified/script.min.js");
      // document.body.appendChild(ckeditor56);

      let ckeditor48 = document.createElement("script");
      ckeditor48.setAttribute("src", "/HTWF/scripts/script.js");
      document.head.appendChild(ckeditor48);

      let ckeditor57 = document.createElement("link");
      ckeditor57.setAttribute(
        "href",
        "/HTWF/scripts/iconsmind/line-icons.min.css"
      );
      ckeditor57.setAttribute("rel", "stylesheet");
      document.head.appendChild(ckeditor57);

      let ckeditor50 = document.createElement("script");
      ckeditor50.setAttribute(
        "src",
        "/HTWF/scripts/bootstrap/js/bootstrap.min.js"
      );
      document.head.appendChild(ckeditor50);

      let ckeditor51 = document.createElement("script");
      ckeditor51.setAttribute("src", "/HTWF/scripts/imagesloaded.min.js");
      document.head.appendChild(ckeditor51);

      let ckeditor52 = document.createElement("script");
      ckeditor52.setAttribute("src", "/HTWF/scripts/parallax.min.js");
      document.head.appendChild(ckeditor52);

      let ckeditor53 = document.createElement("script");
      ckeditor53.setAttribute(
        "src",
        "/HTWF/scripts/flexslider/jquery.flexslider-min.js"
      );
      document.head.appendChild(ckeditor53);

      let ckeditor54 = document.createElement("script");
      ckeditor54.setAttribute("src", "/HTWF/scripts/smooth.scroll.min.js");
      document.head.appendChild(ckeditor54);

      // let ckeditor55 = document.createElement("script");
      // ckeditor55.setAttribute("src", "/themekit.dev/tools/sidebar/sidebar.js");
      // ckeditor55.setAttribute("data-setting", "Landearn");
      // document.head.appendChild(ckeditor55);
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  method: {
    logout: function() {
      this.beforeResponse = true;
      this.$store
        .dispatch("logout")
        .then((response) => {
          console.log(response);
          if (response.status == "200") {
            this.$toasted.success("You have logged out successful");
            this.$router.push({ name: "Login" });
          } else {
            this.$toasted.error(response.data.message);
            this.$router.push({ name: "Login" });
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
          this.$router.push({ name: "Login" });
        });
    },
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
        this.$toasted.info("You are now being logged out");
      }
    },

    successResponse() {
      if (this.successResponse == 200) {
        this.$toasted.success("You have been logged out successfully");
        this.step++;
        this.successResponse = false;
        this.beforeResponse = false;
      }
    },
  },
  mounted() {
    // console.log(this.cart);
  },
};
</script>

<style>
/* @import "../minified/bootstrap.min.css"; */
.icon-size {
  height: 15px !important;
  display: inline-block !important;
  padding: 0 !important;
}

@media (max-width: 615px) {
  .calendar-head,
  .im-calendar-4 {
    display: none !important;
  }
}

.how-to-earn {
  /* background: rebeccapurple !important; */
  background: #1d1d1d !important;
  color: #fff;
}

.how-to-earn a {
  color: #fff !important;
}

.carted {
  padding: 8px 10px 6px !important;
  background: transparent !important;
  border-color: transparent !important;
}

.carted:hover,
.carted:not(.btn-border):hover {
  background: #eee !important;
}

.floated-right-cart {
  display: none;
}

@media (max-width: 991px) {
  .floated-right-cart {
    display: inline-block;
  }
  .floated-right-cart {
    float: right;
    margin: 10px 10px 0 0;
  }
}
</style>
