<template>
  <footer class="footer-base" id="footer">
    <div class="container content">
      <div class="row">
        <div class="col-md-4">
          <img class="logo" src="images/full_logo_all_white.png" alt="logo" />
          <hr class="space s" />
          <p class="text-s">
            infiniteness our benchmark.
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
        </div>
        <div class="col-md-4">
          <h3 class="text-black text-uppercase">Contact Info</h3>
          <hr class="space space-30" />
          <ul class="fa-ul text-s ul-squares">
            <li>No 1 Prince Elemoro, Ibeju Lekki, Lagos</li>
            <li>Lagos, Nigeria</li>
            <li>hello@landearn.com</li>
            <li>+2349071284144, +2349053691527</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h3 class="text-black text-uppercase">Useful resources</h3>
          <hr class="space space-30" />
          <div class="footer-menu text-s">
            <!-- <a href="#">NEWSLETTER</a> -->
            <a href="/about">ABOUT US</a>
            <a href="/contact">CONTACTS</a>
            <a href="/earn">HOW TO EARN</a>
            <a href="/login" v-if="!loggedIn">LOGIN</a>
            <a href="/register" v-if="!loggedIn">REGISTER</a>
          </div>
        </div>
      </div>
      <hr class="space hidden-sm" />
      <!-- <div class="row copy-row">
        <div class="col-md-12 copy-text">
          © 2018 Lightwire - Multipurpose &amp; Modern Html Template Handmade by
          <a href="http://schiocco.com/">schiocco.com</a>
        </div>
      </div> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  mounted() {
    // if (document.body.offsetHeight < 900) {
    //   if (document.body.offsetHeight < 800) {
    //     document.getElementById("footer").style.top =
    //       document.body.clientHeight - 640 + "px";
    //     return;
    //   }
    //   document.getElementById("footer").style.top =
    //     document.body.clientHeight - 855 + "px";
    // }

    if (document.getElementsByClassName("content")[0].style.height < 700) {
      document.getElementsByClassName("content")[0].style.minHeight = 60 + "vh";
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>

<style scoped>
.footer-base {
  background: #4c4c4c;
}

a {
  color: #ccc !important;
}

.social-button i.circle,
.social-group i.circle {
  color: #ccc !important;
  border-color: #ccc !important;
}

.footer-base {
  color: #ccc !important;
}
</style>
