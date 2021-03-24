<template>
  <div>
    <HeaderComponent />
    <div class="section-empty">
      <div class="container content">
        <h2 class="product-title">
          SOARING HEIGHTS OKEOGUN
        </h2>

        <div class="row">
          <div class="col-md-8">
            <div
              class="flexslider slider nav-inner white row-17"
              data-options="numItems:3,controlNav:true,itemMargin:60"
            >
              <ul class="slides">
                <li>
                  <a
                    class="img-box lightbox"
                    href="images/gallery/okegun_1.jpg"
                    data-lightbox-anima="fade-top"
                  >
                    <img src="images/gallery/okeogun_1.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    class="img-box lightbox"
                    href="images/gallery/okeogun_2.jpg"
                    data-lightbox-anima="fade-top"
                  >
                    <img src="images/gallery/okeogun_2.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    class="img-box lightbox"
                    href="images/gallery/okeogun_3.jpg"
                    data-lightbox-anima="fade-top"
                  >
                    <img src="images/gallery/okegun_3.jpg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 boxed white row-17">
            <h2 class="text-color">Details</h2>
            <hr class="space m" />
            <ul class="list-texts">
              <li><b>Product.</b> Estate Land</li>
              <li><b>Location.</b> Okeogun</li>
              <li><b>Area per plot</b> 550 sqm</li>
              <li><b>Price per plot.</b> &#x20A6;4M</li>
              <li><b>Current Title.</b> Freehold</li>
              <li><b>Future Title.</b> Governor's Consent</li>
            </ul>
            <div class="slidecontainer">
              <input
                type="range"
                :min="item.minSqm"
                :max="item.maxSqm"
                :step="item.minSqm"
                class="slider"
                id="myRange"
                v-model="item.sqm"
              />
            </div>
            <!-- <div class="range">
              <input type="range" min="1" max="7" steps="1" value="1" />
            </div>

            <ul class="range-labels">
              <li class="active selected">SQM</li>
              <li>400</li>
              <li>450</li>
              <li>500</li>
              <li>550</li>
              <li>600</li>
              <li>650</li>
            </ul> -->

            <hr class="space s" />
            <div class="sqm-range">
              <input
                type="number"
                class="sqm-input"
                v-model="item.sqm"
                disabled
              />
              <button class="sqm-btn" @click="add_sqm">
                <i class="fas fa-plus-square"></i>
              </button>

              <button class="sqm-btn" @click="minus_sqm">
                <i class="fas fa-minus-square"></i>
              </button>

              <a href="#" @click.prevent="add_to_cart" class="register-button">
                <i class="fas fa-cart-plus"></i>
                <span class="add-to-cart">Add to cart</span>
              </a>
            </div>
          </div>
          <br />
        </div>
        <div>
          <a href="/galleryOkeogun" class="btn">More views</a>
        </div>
        <hr class="space" />
        <h2>Description</h2>
        <p>
          Soaring heights Okeogun is one of the most fascinating discovery in
          Landearn estate development. It is the first estate and housing
          development from Landearn. Soaring Heights is the codename for our
          estate projects around the world and based on the location of this
          one, we then have Soaring Heights Okeogun.
        </p>
        <p>
          The estate currently has gazzette title, and we're currently working
          on obtaining Governor's Consent for the parcel of Land.
        </p>
        <p>
          The estate land total size is about 130 plots of lands, with only
          about 100 plots of the land available for sale. The other portion of
          the land constitutes both spaces for the road networks, parks,
          recreational facilities, co-working spaces, power plant, water plant,
          estate office, and a small building project where we intend to develop
          few houses for resale purposes.
        </p>
        <p>
          The estate lands are dry lands and not lowlands, so we won't bother
          about filling the entire plots with sand. Development on the estate
          begins with the fencing, road network, power plant and estate office.
          Our first phase development to prepare the area for proper habitation
          will last for 2 years. Those interested for us to help them build can
          contact us, we also help to build amazing homes on this estate for our
          clients.
        </p>
        <p>
          Once the land has been bought, it appears on your dashboard, showing
          updates of our developments on the said location. Please check a more
          comprehensive description of the benefits of the estate below.
        </p>

        <hr class="space" />

        <table class="grid-table border-table table-border-top">
          <tbody>
            <tr>
              <td class="space-up">
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-map-marker text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">Okeogun, Ibeju-Lekki</label>
                    <!-- <p class="text-s">Prefabricated houses</p> -->
                  </div>
                </div>
              </td>
              <td class="space-up">
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-stamp text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">Gazette</label>
                  </div>
                </div>
              </td>
              <td class="space-up">
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-electricity text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">24hrs Electricity</label>
                  </div>
                </div>
              </td>
              <td class="space-up">
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-light-bulb text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">Street Lights</label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-background text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">275 &amp; 550 sqm</label>
                  </div>
                </div>
              </td>
              <td>
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-pipe   text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">Water Supply</label>
                  </div>
                </div>
              </td>
              <td>
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-money text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">&#x20a6;4M</label>
                  </div>
                </div>
              </td>
              <td>
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-security-camera text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">CCTV</label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="space-down">
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-summer text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">Recreational Park</label>
                  </div>
                </div>
              </td>
              <td class="space-down">
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-structure   text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">Perimeter Fencing</label>
                  </div>
                </div>
              </td>
              <td class="space-down">
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-road text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">Road Network</label>
                  </div>
                </div>
              </td>
              <td class="space-down">
                <div class="icon-box icon-box-top-bottom">
                  <div class="icon-box-cell">
                    <i class="im-office text-xl"></i>
                  </div>
                  <div class="icon-box-cell">
                    <label class="text-m">Co-working spaces</label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr class="space" />
        <h2>LOCATION BENEFITS</h2>
        <div class="benefits space-up">
          <ul>
            <li>
              <i class="far fa-dot-circle"></i> Less than 30 minutes drive to
              the Lekki free trade zone, Dangote refinery, and and so many
              countless notable factories.
            </li>
            <li>
              <i class="far fa-dot-circle"></i> Less than 5 minutes drive to the
              new Lagos airport.
            </li>
            <li>
              <i class="far fa-dot-circle"></i> Less than 5 minutes drive to the
              new Lagos city Atlas City that is currently selling above N20M.
            </li>
            <li>
              <i class="far fa-dot-circle"></i> Less than 2 minutes drive to the
              new Lekki-Epe expressway.
            </li>
            <li>
              <i class="far fa-dot-circle"></i> Less than 30 minutes drive to
              Ajah.
            </li>
          </ul>
        </div>

        <hr class="space " />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "FullProjectComponent",
  components: {
    // FullProjectComponent,
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      item: {
        name: "Soaring Heights Okeogun",
        sqm: 275,
        price: 4000000,
        minSqm: 275,
        maxSqm: 55000,
      },
    };
  },
  mounted() {
    var items = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    for (var i = 0; i < items.length; i++) {
      if (Object.values(items[i]).indexOf("Soaring Heights Okeogun") > -1) {
        this.item = items[i];
      }
    }
  },
  methods: {
    add_to_cart() {
      var items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
      // console.log(items);
      var count = 0;
      var message = "";
      if (items.length > 0) {
        for (var i = 0; i < items.length; i++) {
          if (items[i].name == this.item.name) {
            if (
              parseInt(items[i].sqm) + parseInt(this.item.sqm) >
              parseInt(this.item.maxSqm)
            ) {
              if (parseInt(items[i].sqm) == this.item.maxSqm) {
                this.$toasted.error(
                  "You already have the maximum available land for " +
                    this.item.name +
                    ", to add a fewer land, please clear your cart at the top right and add a fresh one"
                );
                this.item.sqm = this.item.minSqm;
                return false;
              }
              var remainder =
                parseInt(this.item.maxSqm) - parseInt(items[i].sqm);
              this.$toasted.error(
                "You cannot add more than " +
                  this.item.maxSqm +
                  " sqm for the " +
                  this.item.name +
                  " lands, you already have " +
                  items[i].sqm +
                  ", please reduce it to " +
                  remainder +
                  " or less"
              );
              this.item.sqm = remainder;
              return false;
            }
            items[i].sqm = parseInt(items[i].sqm) + parseInt(this.item.sqm);
            count += 1;
          }
        }
        if (count == 0) {
          items.push(this.item);
          message = this.item.name + " have been added to your cart";
        } else {
          message =
            this.item.sqm +
            " more sqm have been added to the " +
            this.item.name +
            " in your cart";
        }
      } else {
        items.push(this.item);
        message = this.item.name + " have been added to your cart";
      }
      items = JSON.parse(JSON.stringify(items));
      console.log(items);
      items = JSON.stringify(items);
      localStorage.setItem("items", items);
      this.$store.dispatch("setCartUpdate");
      this.$toasted.success(message);
      return true;
    },
    add_sqm() {
      if (this.item.sqm == 55000) return;
      this.item.sqm = parseInt(this.item.sqm) + 275;
    },
    minus_sqm() {
      if (this.item.sqm == 275) return;
      this.item.sqm = parseInt(this.item.sqm) - 275;
    },
  },
};
</script>

<style scoped>
.sqm-range .add-to-cart {
  display: none;
}

.product-banner {
  max-height: 200px;
  max-width: 100%;
  display: block;
}

.text-color {
  color: #fff !important;
}

.register-button {
  background: #1d1d1d !important;
  color: #fff !important;
  padding: 6px 10px !important;
  margin-top: -2px;
  font-size: 16px;
}

.sqm-btn {
  background: #333 !important;
  color: #fff !important;
  padding: 2px 4px !important;
  font-size: 16px;
  border: 0 !important;
  margin-left: 5px;
}

.sqm-input {
  width: 80px !important;
  background: #f1f1f1;
  text-align: center;
}

.sqm-range a {
  float: right !important;
}

[class*="col-md-"].boxed {
  background-color: #48a8fc;
}
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #fff;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 20px;
  background: #000;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #fff;
  cursor: pointer;
}

.product-title {
  margin-bottom: 30px;
}

.table-border-top {
  border-top: 1px solid #48a8fc !important;
  border-bottom: 1px solid #48a8fc !important;
}

.space-up {
  padding-top: 30px !important;
}
.space-down {
  padding-bottom: 30px !important;
}
.benefits ul {
  padding: 0 !important;
  margin: 0 !important;
}
.benefits li {
  list-style-type: none;
  padding: 0 !important;
  margin: 0 !important;
}
.benefits i {
  color: #48a8fc;
}
.benefits {
  font-size: 16px;
}
.fas {
  color: #48a8fc;
}
.sqm-range i {
  color: #fff;
}

@media (min-width: 991px) and (max-width: 993px) {
  .row-17 {
    line-height: 1.3 !important;
  }
}
@media (min-width: 993px) and (max-width: 1200px) {
  .row-17 {
    line-height: 1.5 !important;
  }
}

@media (max-width: 271px) {
  .sqm-range a {
    float: none !important;
    width: 100% !important;
    display: block;
  }
  .register-button i {
    display: none;
  }
  .register-button .add-to-cart {
    display: inline;
  }
  .register-button {
    background: #000;
    text-align: center;
    margin-top: 10px;
  }
}

@media (min-width: 767px) and (max-width: 792px) {
  .sqm-range a {
    float: none !important;
    width: 100% !important;
    display: block;
  }
  .register-button i {
    display: none;
  }
  .register-button .add-to-cart {
    display: inline;
  }
  .register-button {
    background: #000;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
