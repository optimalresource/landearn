<template>
  <div>
    <div
      class="section-bg-image parallax-window white ken-burn-center no-padding-bottom"
      data-natural-height="1080"
      data-natural-width="1920"
      data-parallax="scroll"
      data-image-src="images/ban1.jpg"
    >
      <div class="content">
        <hr class="space" />
        <hr class="space" />
        <div
          class="flexslider slider"
          data-options="controlNav:true,directionNav:true"
        >
          <ul class="slides">
            <li @click="action('/login')">
              <div class="row vertical-row box-slide">
                <div class="col-md-7 text-left-sm">
                  <h1 class="text-uppercase">
                    buy a land, get 6% back to start building
                  </h1>
                  <hr class="space m" />
                  <p>
                    We offer 2% of the puchasing money annually to our customers
                    on every land purchased for a period of 3 years.
                  </p>
                </div>
                <div class="col-md-6 text-right text-left-sm">
                  <hr class="space visible-sm" />
                  <a href="/login" class="btn btn-border btn-yellow btn-lg"
                    >buy a land</a
                  >
                </div>
              </div>
            </li>
            <li @click="action('/register')">
              <div class="row vertical-row box-slide">
                <div class="col-md-7 text-left-sm">
                  <h1 class="text-uppercase">
                    At Landearn, everybody earns
                  </h1>
                  <hr class="space m" />
                  <p>
                    Landearn provides opportunity for projects sponsorship. This
                    enables investors to rightfully invest their money by
                    sponsoring our ongoing projects and hence get interests
                    annually.
                  </p>
                </div>
                <div class="col-md-6 text-right text-left-sm">
                  <hr class="space visible-sm" />
                  <a href="/register" class="btn btn-border btn-yellow btn-lg"
                    >sponsor a project</a
                  >
                  <!-- <a
                  href="https://www.youtube.com/watch?v=j_-2dUvlEdY"
                  data-lightbox-anima="fade-right"
                  class="btn btn-lg btn-play text-color lightbox mfp-iframe"
                  >Watch video <i></i
                ></a> -->
                  <hr class="space visible-sm" />
                </div>
              </div>
            </li>
            <li @click="action('/register')">
              <div class="row vertical-row box-slide">
                <div class="col-md-7 text-left-sm">
                  <h1 class="text-uppercase">
                    sponsor a project to earn returns annually
                  </h1>
                  <hr class="space m" />
                  <p>
                    Landearn provides opportunity for projects sponsorship. This
                    enables investors to rightfully invest their money by
                    sponsoring our ongoing projects and hence get interests
                    annually.
                  </p>
                </div>
                <div class="col-md-6 text-right text-left-sm">
                  <hr class="space visible-sm" />
                  <a href="/register" class="btn btn-border btn-yellow btn-lg"
                    >sponsor a project</a
                  >
                  <!-- <a
                  href="https://www.youtube.com/watch?v=j_-2dUvlEdY"
                  data-lightbox-anima="fade-right"
                  class="btn btn-lg btn-play text-color lightbox mfp-iframe"
                  >Watch video <i></i
                ></a> -->
                  <hr class="space visible-sm" />
                </div>
              </div>
            </li>
            <li @click="action('/login')">
              <div class="row vertical-row box-slide">
                <div class="col-md-7 text-left-sm">
                  <h1 class="text-uppercase">
                    Ready Lands to Make Building Easy
                  </h1>
                  <hr class="space m" />
                  <p>
                    Lands bought will be cleared and trees uprooted for free to
                    prepare for building. When the lands are lowlands or swampy,
                    it will be sand-filled to road level. We've got all that
                    covered for you just to enable you start building without
                    much hassle.
                  </p>
                </div>
                <div class="col-md-6 text-right text-left-sm">
                  <hr class="space visible-sm" />
                  <a href="/login" class="btn btn-border btn-yellow btn-lg"
                    >read more</a
                  >
                </div>
              </div>
            </li>
            <li @click="action('/register')">
              <div class="row vertical-row box-slide">
                <div class="col-md-7 text-left-sm">
                  <h1 class="text-uppercase">
                    Properties have valid title
                  </h1>
                  <hr class="space m" />
                  <p>
                    Prior to acquiring and selling any lands within Landearn, we
                    verify the authenticity and ensure that the land has a good
                    title or we process a valid title for the said land.
                  </p>
                </div>
                <div class="col-md-6 text-right text-left-sm">
                  <hr class="space visible-sm" />
                  <a href="/register" class="btn btn-border btn-yellow btn-lg"
                    >read more</a
                  >
                </div>
              </div>
            </li>
            <li @click="action('/login')">
              <div class="row vertical-row box-slide">
                <div class="col-md-7 text-left-sm">
                  <h1 class="text-uppercase">
                    We Provide Nature Friendly Environment
                  </h1>
                  <hr class="space m" />
                  <p>
                    We develop and maintain a nature friendly enviroment that is
                    soothing for relaxation and comfort which offers maximum
                    level of peace and serenity just the way you want it.
                  </p>
                </div>
                <div class="col-md-6 text-right text-left-sm">
                  <hr class="space visible-sm" />
                  <a href="/login" class="btn btn-border btn-yellow btn-lg"
                    >read more</a
                  >
                </div>
              </div>
            </li>
            <li @click="action('/register')">
              <div class="row vertical-row box-slide">
                <div class="col-md-7 text-left-sm">
                  <h1 class="text-uppercase">
                    Well structured architectural design
                  </h1>
                  <hr class="space m" />
                  <p>
                    Our estates are well mapped out and coordinated, offering
                    convenient layout plan and innovative designs within the
                    esate.
                  </p>
                </div>
                <div class="col-md-6 text-right text-left-sm">
                  <hr class="space visible-sm" />
                  <a href="/register" class="btn btn-border btn-yellow btn-lg"
                    >read more</a
                  >
                </div>
              </div>
            </li>
            <li @click="action('/login')">
              <div class="row vertical-row box-slide">
                <div class="col-md-7 text-left-sm">
                  <h1 class="text-uppercase">
                    Top notch estate management skills
                  </h1>
                  <hr class="space m" />
                  <p>
                    We have a well organised system that ensures accurate and
                    efficient management of estate properties, in order for
                    proper allocation of properties to our customers which
                    eliminates any form of disorderliness
                  </p>
                </div>
                <div class="col-md-6 text-right text-left-sm">
                  <hr class="space visible-sm" />
                  <a href="/login" class="btn btn-border btn-yellow btn-lg"
                    >read more</a
                  >
                </div>
              </div>
            </li>
            <!-- <li>
            <div
              class="row vertical-row p-5 m-5"
              style="border:1px solid white; width:400px; float:center"
            >
              <div class="">
                <div class="reg">
                  <h3>Register/Login</h3>
                  <form>
                    <input type="text" name="" id="" placeholder="Username" />
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                    />
                  </form>
                </div>
              </div>
            </div>
          </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSlider",
  components: {},
  methods: {
    action(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style scoped>
.box-slide {
  background: #fff;
  padding: 50px !important;
  opacity: 0.95;
}

.slides li {
  cursor: pointer;
}

@media (max-width: 500px) {
  .box-slide {
    padding: 30px !important;
  }
}
</style>
