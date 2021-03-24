<template>
  <div>
    <div class="section-empty">
      <div class="container content">
        <div class="row">
          <div class="col-md-3 col-sm-4">
            <div class="row">
              <div class="col-md-12 boxed white">
                <h4 class="text-color">Need a Copy</h4>
                <hr class="space m" />
                <p class="text-s">
                  To share this exciting income opportunity with loved ones, use
                  the button below to generate a pdf copy.
                </p>
                <button class="btn-text text-color" @click="download">
                  Download This Page
                </button>
              </div>
              <hr class="space l" />
              <div class="col-md-12 boxed-inverse">
                <h4>Let's help you!</h4>
                <hr class="space m" />
                <ul class="fa-ul ul-dots text-s">
                  <li>No 1 Prince Elemoro, Ibeju Lekki, Lagos</li>
                  <li>Lagos, Nigeria</li>
                  <li>hello@landearn.com</li>
                  <li>+2349071284144, +2349053691527</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-sm-8">
            <hr class="space visible-xs" />
            <h2>Earn Instant &amp; Passive Incomes</h2>
            <p>
              As described below, there are six ways to earn with Landearn.
            </p>
            <hr class="space m" />
            <div class="row">
              <div class="col-md-12">
                <h4 class="text-black">2% rebate for land buyers</h4>
                <hr class="space s" />
                <p>
                  For every lands bought, the buyer gets 2% rebate on the paid
                  amount each year, for a period of 3 years. This offer is
                  exclusive for only land purchases; other developed properties
                  does not qualify for the said rebate. The rebate is in line
                  with the Landearn vision to make the path to becoming a
                  homeowner much easier and affordable. The little 6% rebate is
                  a form of empowerment for buyers to have a token to begin some
                  construction on their lands in at most 3 years from purchasing
                  the land.
                </p>

                <hr class="space" />
                <h4 class="text-black">10% commission on sales</h4>
                <hr class="space s" />
                <p>
                  You earn 10% commission whenever someone who used your
                  referral code to register on our platform, buys a land or
                  house from Landearn.
                </p>

                <hr class="space" />
                <h4 class="text-black">2% commission on sales</h4>
                <hr class="space s" />
                <p>
                  You earn 2% commission whenever your level 2 referral buys a
                  land or house from Landearn. Your level 2 referrals are those
                  people who uses the referral code of anyone who used your
                  referral code to register on our platform.
                </p>

                <hr class="space" />
                <h4 class="text-black">2% commission on sponsors</h4>
                <hr class="space s" />
                <p>
                  You earn 2% commission whenever someone who used your referral
                  code to register on our platform, sponsors a Landearn project.
                </p>

                <hr class="space" />
                <h4 class="text-black">0.4% commission on sponsors</h4>
                <hr class="space s" />
                <p>
                  You earn 0.4% commission whenever your level 2 referral
                  sponsors a Landearn project.
                </p>

                <hr class="space" />
                <p class="block-quote quote-1">
                  You may not necessarily need have the fund to buy a house or
                  land from Landearn, or even afford the minimum funds required
                  for available sponsors, but you can invite others to Landearn
                  with your code, whenever they or those they refer transact
                  with us, you earn passive income.
                </p>

                <hr class="space" />
                <p>
                  <a href="/register" class="register-button"
                    >click here to register</a
                  >
                </p>
              </div>
            </div>

            <vue-html2pdf
              :show-layout="false"
              :float-layout="true"
              :enable-download="true"
              :preview-modal="true"
              :paginate-elements-by-height="2000"
              filename="How_To_Earn_From_Landearn"
              :pdf-quality="2"
              :manual-pagination="false"
              :htmlToPdfOptions="margin"
              pdf-format="a4"
              pdf-orientation="portrait"
              pdf-content-width="595px"
              @progress="onProgress($event)"
              @hasStartedGeneration="hasStartedGeneration()"
              @hasGenerated="hasGenerated($event)"
              ref="html2Pdf"
            >
              <section slot="pdf-content">
                <img src="images/full_logo.png" width="200" />
                <hr class="space visible-xs" />
                <h2>Earn Instant &amp; Passive Incomes</h2>
                <p>
                  As described below, there are six ways to earn with Landearn.
                </p>
                <hr class="space m" />
                <div class="row">
                  <div class="col-md-12">
                    <h4 class="text-black">2% rebate for land buyers</h4>
                    <hr class="space s" />
                    <p class="block-quote">
                      For every lands bought, the buyer gets 2% rebate on the
                      paid amount each year, for a period of 3 years. This offer
                      is exclusive for only land purchases; other developed
                      properties does not qualify for the said rebate. The
                      rebate is in line with the Landearn vision to make the
                      path to becoming a homeowner much easier and affordable.
                      The little 6% rebate is a form of empowerment for buyers
                      to have a token to begin some construction on their lands
                      in at most 3 years from purchasing the land.
                    </p>

                    <hr class="space" />
                    <h4 class="text-black">10% commission on sales</h4>
                    <hr class="space s" />
                    <p class="block-quote">
                      You earn 10% commission whenever someone who used your
                      referral code to register on our platform, buys a land or
                      house from Landearn.
                    </p>

                    <hr class="space" />
                    <h4 class="text-black">2% commission on sales</h4>
                    <hr class="space s" />
                    <p class="block-quote">
                      You earn 2% commission whenever your level 2 referral buys
                      a land or house from Landearn. Your level 2 referrals are
                      those people who uses the referral code of anyone who used
                      your referral code to register on our platform.
                    </p>

                    <hr class="space" />
                    <h4 class="text-black">2% commission on sponsors</h4>
                    <hr class="space s" />
                    <p class="block-quote">
                      You earn 2% commission whenever someone who used your
                      referral code to register on our platform, sponsors a
                      Landearn project.
                    </p>

                    <hr class="space" />
                    <h4 class="text-black">0.4% commission on sponsors</h4>
                    <hr class="space s" />
                    <p class="block-quote">
                      You earn 0.4% commission whenever your level 2 referral
                      sponsors a Landearn project.
                    </p>

                    <hr class="space" />
                    <p class="block-quote">
                      You may not necessarily need have the fund to buy a house
                      or land from Landearn, or even afford the minimum funds
                      required for available sponsors, but you can invite others
                      to Landearn with your code, whenever they or those they
                      refer transact with us, you earn passive income.
                    </p>

                    <hr class="space" />
                    <p>
                      <a href="/register" class="register-button"
                        >click here to register</a
                      >
                    </p>

                    <p>&nbsp;<br /></p>
                  </div>
                </div>
              </section>
            </vue-html2pdf>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import jsPDF from "jspdf";
import VueHtml2pdf from "vue-html2pdf";

export default {
  name: "EarnComponent",
  data() {
    return {
      margin: {
        margin: [20, 20],
        filename: "How_To_Earn_From_Landearn",
      },
    };
  },
  components: {
    VueHtml2pdf,
  },
  methods: {
    download() {
      this.$refs.html2Pdf.generatePdf();
      // const doc = new jsPDF();
      // const html = this.$refs.content.innerHTML;
      // doc.setFontSize(12);
      // doc.html(html, {
      //   callback: function(doc) {
      //     doc.save("How_To_Earn_From_Landearn.pdf");
      //   },
      //   x: 10,
      //   y: 10,
      // });
    },
  },
};
</script>

<style scoped>
.btn-text {
  background: #1d1d1d !important;
}
.text-color {
  color: #fff !important;
}
.register-button {
  background: #1d1d1d !important;
  color: #fff;
  padding: 20px;
  font-size: 18px;
}
</style>
