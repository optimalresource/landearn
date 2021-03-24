<template>
  <div>
    <div class="section-empty">
      <div class="container content">
        <div class="title-modern title-modern-2 st-icon text-left">
          <h2>Sponsor Projects</h2>
          <hr />
          <p>
            Choose from the different development projects available below,
            sponsor and earn from 25% ROI annually.
          </p>
        </div>

        <div class="zero-item" v-if="sponsors.length === 0">
          <p>
            No sponsor project is available at the moment, please check back
            later. We regularly update this section of the application to carry
            project developments that requires sponsor.
          </p>
        </div>

        <div class="maso-list list-sm-12 margin-top" v-if="sponsors.length > 0">
          <div class="maso-box row">
            <div data-sort="2" class="maso-item col-md-12 cat2 cat3">
              <div
                class="advs-box advs-box-side boxed-inverse"
                data-anima="fade-left"
                data-trigger="hover"
              >
                <div class="row">
                  <div class="col-md-4">
                    <div class="img-box">
                      <img src="images/oke_5.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h3>Soaring Heights Elerangbe</h3>
                    <hr class="anima" />
                    <p>
                      This beautiful piece is the first estate project inspired
                      by the Landearn vision. At the moment, the lands are
                      gazetted, dry and having several location benefits..
                    </p>
                    <div class="margin-top">
                      <div class="custom-area col-md-3 colo colo-text" style="">
                        <i class="fas fa-stamp"></i> Gazzette
                      </div>
                      <div class="custom-area col-md-3 colo colo-text" style="">
                        <i class="fas fa-vector-square"></i> 550 SQM
                      </div>
                      <div class="custom-area col-md-3 colo colo-text" style="">
                        <i class="far fa-money-bill-alt"></i> &#x20A6;4M
                      </div>
                      <div class="custom-area col-md-3 colo" style="">
                        <a href="/project" class="btn btn-sm">Buy land</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-sort="4" class="maso-item col-md-12 cat2 cat1">
              <div
                class="advs-box advs-box-side boxed-inverse"
                data-anima="fade-left"
                data-trigger="hover"
              >
                <div class="row">
                  <div class="col-md-4">
                    <div class="img-box">
                      <img src="images/oke_5.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h3>Soaring Heights Okegun</h3>
                    <hr class="anima" />
                    <p>
                      This estate project is situated just 5-10 minutes drive
                      from Ajah. The property is currently excised. There are
                      several benefits the project offers to buyers..
                    </p>
                    <div class="margin-top">
                      <div class="custom-area col-md-3 colo colo-text" style="">
                        <i class="fas fa-stamp"></i> Free Hold
                      </div>
                      <div class="custom-area col-md-3 colo colo-text" style="">
                        <i class="fas fa-vector-square"></i> 550 SQM
                      </div>

                      <div class="custom-area col-md-3 colo colo-text" style="">
                        <i class="far fa-money-bill-alt"></i> &#x20A6;3M
                      </div>
                      <div class="custom-area col-md-3 colo" style="">
                        <a href="/project" class="btn btn-sm">Buy land</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-sort="4" class="maso-item col-md-12 cat2 cat1">
              <div
                class="advs-box advs-box-side boxed-inverse"
                data-anima="fade-left"
                data-trigger="hover"
              >
                <div class="row">
                  <div class="col-md-4">
                    <div class="img-box">
                      <img src="images/oke_5.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h3>Soaring Heights Oluwa Town</h3>
                    <hr class="anima" />
                    <p>
                      This estate project is situated just 5-10 minutes drive
                      from Ajah. The property is currently excised. There are
                      several benefits the project offers to buyers..
                    </p>
                    <div class="margin-top">
                      <div class="custom-area col-md-3 colo colo-text" style="">
                        <i class="fas fa-stamp"></i> Court Judgement
                      </div>
                      <div class="custom-area col-md-3 colo colo-text" style="">
                        <i class="fas fa-vector-square"></i> 550 SQM
                      </div>
                      <div class="custom-area col-md-3 colo colo-text" style="">
                        <i class="far fa-money-bill-alt"></i> &#x20A6;10M
                      </div>
                      <div class="custom-area col-md-3 colo" style="">
                        <a href="/project" class="btn btn-sm">Buy land</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
    <i class="scroll-top scroll-top-mobile show fa fa-sort-asc"></i>
  </div>
</template>

<script>
export default {
  name: "SponsorsComponent",
  data() {
    return {
      sponsors: [],
    };
  },
};
</script>

<style scoped>
.colo {
  padding: 0 !important;
}
.margin-top {
  margin-top: 30px;
}
.custom-area i {
  font-size: 20px;
}
.colo-text {
  margin-top: 30px;
}
.zero-item {
  padding: 15px;
  /* border-radius: 30px;
  border: 1px solid #48a8fc; */
  background: tomato;
  margin-top: 30px;
  color: #fff;
}
</style>
