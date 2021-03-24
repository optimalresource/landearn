<template>
  <div>
    <div class="container content p-5">
      <div class="row">
        <div class="col-md-7 order-md-1">
          <div class="title-modern title-modern-2 st-icon text-left">
            <h2>Final Order Submission</h2>
            <hr />
            <p>
              Make payment to our parent company Optimalsoft Limited with the
              following details.
            </p>
          </div>

          <div class="table-responsive">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">Bank name</th>
                  <td>First City Monument Bank</td>
                </tr>
                <tr>
                  <th scope="row">Account name</th>
                  <td>Optimalsoft Limited</td>
                </tr>
                <tr>
                  <th scope="row">Account number</th>
                  <td>453698012</td>
                </tr>
                <tr>
                  <th scope="row">Payment Reference</th>
                  <td v-if="items.length > 0">{{ user.my_code }}</td>
                  <td v-if="items.length === 0">
                    Please add an item to cart
                  </td>
                </tr>
                <tr>
                  <th scope="row">Payment Amount</th>
                  <td v-if="items.length > 0">&#x20a6;{{ total }}</td>
                  <td v-if="items.length === 0">
                    Please add an item to cart
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="payment-instruction-painted">
            <p>
              If you make payment using teller, send us the teller number, bank
              you transferred from, and a scan of your bank teller to confirm
              your payment for your purchase to start counting. If you made
              payment using bank transfer from your bank app, send us a
              screenshot of your bank transfer and your payment will be approved
              and we will send you the purchase documents.
            </p>
          </div>
        </div>
        <div class="col-md-5 order-md-2 mb-4">
          <!-- <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class=" ">
              <img src="images/cart.svg" alt="My cart" height="27" width="27" />
              <sup class="badge badge-secondary badge-pill">{{
                items.length
              }}</sup>
            </span>
          </h4> -->
          <ul class="list-group">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="list-group-item d-flex justify-content-between lh-condensed"
            >
              <span class="my-0">{{ item.sqm }}M<sup>2</sup></span> at
              <span class="my-0">{{ item.name }}</span> -
              <span class=" ">&#x20a6;{{ item.price }}</span>
            </li>
          </ul>
          <div class="space-bottom" v-if="items.length > 0">
            <div class="col-md-6 payment-title">Total amount</div>
            <div class="col-md-6">
              <strong>&#x20a6;{{ total }}</strong>
            </div>
          </div>
          <form class="card" v-if="items.length > 0">
            <div class="input-group-append">
              <button>Complete Order</button>
            </div>
          </form>
          <div class="payment-instructions">
            <p>
              Please, while making payment, include the payment reference, and
              pay the exact amount you see in the payment amount, then send the
              details from the instructions below to our sales email,
              sales@landearn.com. For more information please call
              +2349071284144.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {
    items() {
      return this.$store.state.items;
    },
    user() {
      return this.$store.state.user;
    },
    total() {
      var obj = this.$store.state.items;
      return obj.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.price;
      }, 0);
    },
  },
  watch: {},
};
</script>

<style scoped>
.lh-condensed {
  line-height: 1.25;
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

.list-group-item {
  background: #eaeaea;
  margin-bottom: 10px;
  padding: 10px;
}

th[scope="row"] {
  background-color: #4c4c4c;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

th[scope="row"],
td {
  padding: 15px !important;
}

.payment-instructions {
  margin-top: 30px;
  /* text-decoration-line: underline;
  text-decoration-style: unset;
  text-decoration-color: orange;
  -moz-text-decoration-line: underline;
  -moz-text-decoration-style: unset;
  -moz-text-decoration-color: orange;
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-style: unset;
  -webkit-text-decoration-color: orange; */
  border-bottom: 1px solid;
}
.payment-instruction-painted {
  background: #48a8fc;
  border-radius: 10px;
  color: #fff;
  padding: 15px;
  margin-bottom: 30px;
}
.payment-title {
  background: #4c4c4c;
  color: #fff;
  /* padding: 10px; */
  /* margin-right: 30px; */
}
.space-bottom {
  padding-bottom: 50px !important;
}

@media (max-width: 767px) {
  .space-bottom {
    padding-bottom: 30px !important;
  }
}
</style>
