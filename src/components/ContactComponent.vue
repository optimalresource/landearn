<template>
  <div>
    <div class="section-map box-middle-container row-20">
      <div
        class="google-map"
        data-coords="6.473408, 3.753981"
        data-zoom="12"
        data-skin=" "
        data-marker-pos-top="30"
        data-marker-pos="col-md-6-right"
        data-marker="images/marker-map-4.png"
      ></div>
      <div class="overlaybox overlaybox-side overlaybox">
        <div class="container content">
          <div class="row">
            <div
              class="col-md-6 overlaybox-inner box-middle"
              data-anima="fade-left"
            >
              <div class="row contact-banner">
                <div class="col-md-6">
                  <h2>Landearn</h2>
                  <p class="text-left text-s">
                    Call us if you have a general query about the construction
                    and factory industry scheme.
                  </p>
                  <hr class="space s" />
                  <div class="btn-group social-group btn-group-icons">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/landearnhomesltd"
                      data-social="share-facebook"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                    >
                      <i class="fa fa-facebook text-s circle"></i>
                    </a>
                    <a
                      target="_blank"
                      href="#"
                      data-social="share-instagram"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                    >
                      <i class="fab fa-instagram-square text-s circle"></i>
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
                      <i class="fa fa-linkedin text-s circle"></i>
                    </a>
                  </div>
                  <!-- <div
                    class="btn-group social-group btn-group-icons social-colors"
                  >
                    <a target="_blank" href="#"
                      ><i class="fa fa-facebook"></i
                    ></a>
                    <a target="_blank" href="#"
                      ><i class="fa fa-twitter"></i
                    ></a>
                    <a target="_blank" href="#"
                      ><i class="fa fa-linkedin"></i
                    ></a>
                  </div> -->
                </div>
                <div class="col-md-6">
                  <hr class="space m visible-xs" />
                  <h2>Contacts</h2>
                  <hr class="space m" />
                  <ul class="fa-ul ul-squares no-margins text-s">
                    <li>No 1 Prince Elemoro, Ibeju Lekki, Lagos</li>
                    <li>Lagos, Nigeria</li>
                    <li>hello@landearn.com</li>
                    <li>+2349071284144, +2349053691527</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-empty">
      <div class="container content">
        <div class="row">
          <div class="col-md-6 col-sm-12 text-left">
            <h2>Keep in touch</h2>
            <p>
              Do you have a question you would like to ask us? Are you looking
              for careers advice in construction?
            </p>
            <hr class="space m" />
            <form action="#" class="form-box form-ajax" method="post">
              <div class="row">
                <div class="col-md-6">
                  <p>Name</p>
                  <input
                    id="name"
                    name="name"
                    placeholder=""
                    type="text"
                    class="form-control form-value"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <p>Email</p>
                  <input
                    id="email"
                    name="email"
                    placeholder=""
                    type="email"
                    class="form-control form-value"
                    required
                  />
                </div>
              </div>
              <hr class="space xs" />
              <p>Subject</p>
              <input
                id="subject"
                name="subject"
                placeholder=""
                type="text"
                class="form-control form-value"
                required
              />
              <hr class="space xs" />
              <p>Messagge</p>
              <textarea
                id="messagge"
                name="messagge"
                placeholder=""
                class="form-control form-value"
                required
              ></textarea>
              <hr class="space s" />
              <button class="btn-sm btn" type="submit">Send messagge</button>
              <div class="success-box">
                <div class="alert alert-success">
                  Congratulations. Your message has been sent successfully
                </div>
              </div>
              <div class="error-box">
                <div class="alert alert-warning">
                  Error, please retry. Your message has not been sent
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-6 col-sm-12">
            <table class="table table-hover text-s contact-days">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Morning</th>
                  <th>Afternoom</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Monday</th>
                  <td>8am - 12am</td>
                  <td>15PM - 19PM</td>
                </tr>
                <tr>
                  <th>Tuesday</th>
                  <td>8am - 12am</td>
                  <td>5pm - 9pm</td>
                </tr>
                <tr>
                  <th>Wednesday</th>
                  <td>8am - 12am</td>
                  <td>5pm - 9pm</td>
                </tr>
                <tr>
                  <th>Thirsday</th>
                  <td>8am - 12am</td>
                  <td>5pm - 9pm</td>
                </tr>
                <tr>
                  <th>Friday</th>
                  <td>8am - 12am</td>
                  <td>5pm - 9pm</td>
                </tr>
                <tr>
                  <th>Saturday</th>
                  <td>8am - 12am</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <th>Sunday</th>
                  <td>Closed</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
            <hr class="space m" />
            <div
              class="advs-box advs-box-side-icon boxed-inverse pull-right"
              data-anima="scale-up"
              data-trigger="hover"
            >
              <div class="icon-box">
                <i class="im-environmental-3 icon anima"></i>
              </div>
              <div class="caption-box">
                <h3>For a green future</h3>
                <p>
                  Landearn homes limited provide opportunities for individuals,
                  families or communities to be able to purchase land and still
                  be potential earners from the already bought land. Our
                  services include purchasing and development of lands to the
                  ultimate best to meet up with futuristic plan of how a
                  well-developed estate/city should be.
                </p>
                <a href="/about" class="btn-text">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// import VueToastr from "vue-toastr";
import LoadScript from "vue-plugin-load-script";
Vue.use(LoadScript);

export default {
  name: "ContactComponent",
  mounted() {
    Vue.loadScript("../../public/HTWF/scripts/google.maps.min.js");
    Vue.loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDl7p8SWg-5kLe7i-usdYCu5m3eVllMDTs"
    );
  },
};
</script>
<style scoped>
/* @import "../../public/HTWF/css/content-box.css";
@import "../../public/HTWF/css/animations.css";
@import "../../public/HTWF/scripts/php/contact-form.css"; */

@media (min-width: 993px) {
  /* .overlaybox {
    margin-top: 121px !important;
  } */
}
/* @media (min-width: 400px) {
  .overlaybox {
    margin-top: 50px !important;
  }
} */

.contact-days {
  background: #e1e1e1 !important;
  color: #1e1e1e !important;
}

.caption-box p,
.contact-banner p,
.contact-banner li {
  color: #1e1e1e !important;
}

.section-map {
  background: #545454 !important;
}
</style>
