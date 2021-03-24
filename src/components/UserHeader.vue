<template>
  <div class="iq-top-navbar">
    <div class="container">
      <div class="iq-navbar-custom">
        <div class="d-flex align-items-center justify-content-between">
          <div
            class="iq-navbar-logo d-flex align-items-center justify-content-between"
          >
            <a href="/dashboard" class="header-logo">
              <img
                src="images/full_logo.png"
                class="img-fluid rounded-normal light-logo big-screen"
                alt="logo"
              />
              <img
                src="images/fav.png"
                class="img-fluid rounded-normal light-logo small-screen"
                alt="logo"
              />
              <img
                src="images/full_logo_all_white.png"
                class="img-fluid rounded-normal darkmode-logo big-screen"
                alt="logo"
              />
              <img
                src="images/white_fav.png"
                class="img-fluid rounded-normal darkmode-logo small-screen"
                alt="logo"
              />
            </a>
          </div>
          <nav class="navbar navbar-expand-lg navbar-light p-3">
            <div class="change-mode">
              <div
                class="custom-control custom-switch custom-switch-icon custom-control-indivne"
              >
                <div class="custom-switch-inner">
                  <p class="mb-0"></p>
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="dark-mode"
                    data-active="true"
                  />
                  <label
                    class="custom-control-label"
                    for="dark-mode"
                    data-mode="toggle"
                  >
                    <span class="switch-icon-left"
                      ><i class="a-left ri-moon-clear-line"></i
                    ></span>
                    <span class="switch-icon-right"
                      ><i class="a-right ri-sun-line"></i
                    ></span>
                  </label>
                </div>
              </div>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <i class="ri-menu-3-line"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto navbar-list align-items-center">
                <!-- <li class="nav-item nav-icon dropdown ml-3">
                  <a
                    href="#"
                    class="search-toggle dropdown-toggle"
                    id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="las la-envelope"></i>
                    <span class="badge badge-primary count-mail rounded-circle"
                      >2</span
                    >
                    <span class="bg-primary"></span>
                  </a>
                  <div
                    class="iq-sub-dropdown dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <div class="card shadow-none m-0">
                      <div class="card-body p-0 ">
                        <div class="cust-title p-3">
                          <h5 class="mb-0">All Messages</h5>
                        </div>
                        <div class="p-2">
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img
                                  class="avatar-40 rounded-small"
                                  src="../assets/images/user/u-1.jpg"
                                  alt="01"
                                />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Barry Emma Watson</h6>
                                <small class="mb-0"
                                  >We Want to see you On..</small
                                >
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img
                                  class="avatar-40 rounded-small"
                                  src="../assets/images/user/u-2.jpg"
                                  alt="02"
                                />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Lorem Ipsum Watson</h6>
                                <small class="mb-0">Can we have a Call?</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img
                                  class="avatar-40 rounded-small"
                                  src="../assets/images/user/u-3.jpg"
                                  alt="03"
                                />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Why do we use it?</h6>
                                <small class="mb-0"
                                  >Thank You but now we Don't...</small
                                >
                              </div>
                            </div>
                          </a>
                        </div>
                        <a
                          class="right-ic btn-block position-relative p-3 border-top text-center"
                          href="#"
                          role="button"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </li> -->
                <li class="nav-item nav-icon dropdown">
                  <div
                    class="iq-sub-dropdown dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div class="card shadow-none m-0">
                      <div class="card-body p-0 ">
                        <div class="cust-title p-3">
                          <h5 class="mb-0">Notifications</h5>
                        </div>
                        <div class="p-2">
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img
                                  class="avatar-40 rounded-small"
                                  src="../assets/images/user/u-1.jpg"
                                  alt="01"
                                />
                              </div>
                              <div class="media-body ml-3">
                                <div
                                  class="d-flex align-items-center justify-content-between"
                                >
                                  <h6 class="mb-0">Anne Effit</h6>
                                  <small class="mb-0">02 Min Ago</small>
                                </div>
                                <small class="mb-0">Manager</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img
                                  class="avatar-40 rounded-small"
                                  src="../assets/images/user/u-2.jpg"
                                  alt="02"
                                />
                              </div>
                              <div class="media-body ml-3">
                                <div
                                  class="d-flex align-items-center justify-content-between"
                                >
                                  <h6 class="mb-0">Eric Shun</h6>
                                  <small class="mb-0">05 Min Ago</small>
                                </div>
                                <small class="mb-0">Manager</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center cust-card p-2">
                              <div class="">
                                <img
                                  class="avatar-40 rounded-small"
                                  src="../assets/images/user/u-3.jpg"
                                  alt="03"
                                />
                              </div>
                              <div class="media-body ml-3">
                                <div
                                  class="d-flex align-items-center justify-content-between"
                                >
                                  <h6 class="mb-0">Ken Tucky</h6>
                                  <small class="mb-0">10 Min Ago</small>
                                </div>
                                <small class="mb-0">Employee</small>
                              </div>
                            </div>
                          </a>
                        </div>
                        <a
                          class="right-ic btn-block position-relative p-3 border-top text-center"
                          href="#"
                          role="button"
                        >
                          See All Notification
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="caption-content">
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
                    <!-- <div class="caption ml-3">
                      <h6 class="mb-0 line-height">
                        Rick O'shea<i class="las la-angle-down ml-3"></i>
                      </h6>
                    </div> -->
                  </a>
                  <div
                    class="iq-sub-dropdown dropdown-menu user-dropdown"
                    aria-labelledby="dropdownMenuButton3"
                  >
                    <div class="card m-0">
                      <div class="card-body p-0">
                        <div class="py-3">
                          <a href="/" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="fas fa-paper-plane  mr-3"></i>
                              <h6>Go to main site</h6>
                            </div>
                          </a>
                          <a href="/bookinspection" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="fas fa-edit mr-3"></i>
                              <h6>Book Inspection</h6>
                            </div>
                          </a>
                          <a href="/orderhistory" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="fas fa-history  mr-3"></i>
                              <h6>Order History</h6>
                            </div>
                          </a>
                          <a href="/myProject" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="fas fa-clipboard-list mr-3"></i>
                              <h6>My Projects</h6>
                            </div>
                          </a>
                          <a href="/projects" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="fas fa-money-bill-wave mr-3"></i>
                              <h6>Buy a Land</h6>
                            </div>
                          </a>
                          <a href="/changePassword" class="iq-sub-card">
                            <div class="media align-items-center">
                              <i class="ri-lock-line mr-3"></i>
                              <h6>Change Password</h6>
                            </div>
                          </a>
                          <a
                            href="/referrals"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            class="iq-sub-card"
                          >
                            <div class="media align-items-center">
                              <i class="ri-links-line mr-3"></i>
                              <h6>First Level Referrals</h6>
                            </div>
                          </a>
                          <a
                            href="/secondLevel"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            class="iq-sub-card"
                          >
                            <div class="media align-items-center">
                              <i class="ri-links-line mr-3"></i>
                              <h6>Second Level Referrals</h6>
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
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHeader",
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
    var arr = [];
    arr = document.body.className.split(" ");
    if (arr.indexOf("fixed-top-navbar") == -1) {
      document.body.className += " " + "fixed-top-navbar";
    }
    if (arr.indexOf("top-nav") == -1) {
      document.body.className += " " + "top-nav";
    }

    let ckeditor56 = document.createElement("script");
    ckeditor56.setAttribute("src", "/minified/script.min.js");
    document.body.appendChild(ckeditor56);

    let ckeditor21 = document.createElement("link");
    ckeditor21.setAttribute("href", "/assets/css/backend.minf700.css?v=1.0.1");
    ckeditor21.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor21);

    let ckeditor22 = document.createElement("link");
    ckeditor22.setAttribute(
      "href",
      "/assets/vendor/%40fortawesome/fontawesome-free/css/all.min.css"
    );
    ckeditor22.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor22);

    let ckeditor23 = document.createElement("link");
    ckeditor23.setAttribute(
      "href",
      "/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css"
    );
    ckeditor23.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor23);

    let ckeditor24 = document.createElement("link");
    ckeditor24.setAttribute(
      "href",
      "/assets/vendor/remixicon/fonts/remixicon.css"
    );
    ckeditor24.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor24);

    let ckeditor25 = document.createElement("link");
    ckeditor25.setAttribute(
      "href",
      "/assets/vendor/%40icon/dripicons/dripicons.css"
    );
    ckeditor25.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor25);

    let ckeditor26 = document.createElement("link");
    ckeditor26.setAttribute(
      "href",
      "/assets/vendor/fullcalendar/core/main.css"
    );
    ckeditor26.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor26);

    let ckeditor27 = document.createElement("link");
    ckeditor27.setAttribute(
      "href",
      "/assets/vendor/fullcalendar/core/main.css"
    );
    ckeditor27.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor27);

    let ckeditor28 = document.createElement("link");
    ckeditor28.setAttribute(
      "href",
      "/assets/vendor/fullcalendar/daygrid/main.css"
    );
    ckeditor28.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor28);

    let ckeditor29 = document.createElement("link");
    ckeditor29.setAttribute(
      "href",
      "/assets/vendor/fullcalendar/timegrid/main.css"
    );
    ckeditor29.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor29);

    let ckeditor30 = document.createElement("link");
    ckeditor30.setAttribute(
      "href",
      "/assets/vendor/fullcalendar/list/main.css"
    );
    ckeditor30.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor30);

    let ckeditor31 = document.createElement("link");
    ckeditor31.setAttribute("href", "/assets/vendor/mapbox/mapbox-gl.css");
    ckeditor31.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor31);

    let ckeditor32 = document.createElement("link");
    ckeditor32.setAttribute(
      "href",
      "/assets/vendor/daterangepicker/daterangepicker.css"
    );
    ckeditor32.setAttribute("rel", "stylesheet");
    document.head.appendChild(ckeditor32);
  },
  methods: {
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
};
</script>

<style>
/* @import "../assets/css/backend.minf700.css?v=1.0.1";
@import "../assets/vendor/%40fortawesome/fontawesome-free/css/all.min.css";
@import "../assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css";
@import "../assets/vendor/remixicon/fonts/remixicon.css";
@import "../assets/vendor/%40icon/dripicons/dripicons.css";
@import "../assets/vendor/fullcalendar/core/main.css";
@import "../assets/vendor/fullcalendar/daygrid/main.css";
@import "../assets/vendor/fullcalendar/timegrid/main.css";
@import "../assets/vendor/fullcalendar/list/main.css";
@import "../assets/vendor/mapbox/mapbox-gl.css";
@import "../assets/vendor/daterangepicker/daterangepicker.css"; */
.big-screen {
  display: inline;
}
.d-none .big-screen,
.d-none .small-screen,
.small-screen {
  display: none;
}

@media (max-width: 346px) {
  .small-screen {
    display: inline;
  }
  .big-screen,
  .d-none .small-screen,
  .d-none .big-screen {
    display: none;
  }
  .iq-navbar-logo img {
    height: 40px !important;
  }
}
.card-margin-top {
  margin-top: 50px !important;
}
</style>
