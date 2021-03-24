<template>
  <div>
    <div class="section-empty">
      <div class="container content">
        <div class="title-modern title-modern-2 st-icon text-left">
          <h2>Cart Checkout</h2>
          <hr />
          <p>
            Review your cart information and click on make payment to continue
            your order.
          </p>
        </div>

        <div class="row">
          <ul class="responsive-table">
            <li class="table-header">
              <div class="col col-1">#</div>
              <div class="col col-2">Product Name</div>
              <div class="col col-3">Unit</div>
              <div class="col col-4">Amount</div>
            </li>
            <li class="table-row" v-for="(item, index) in items" :key="index">
              <div class="col col-1 d-label" data-label="SN">
                {{ index + 1 }}
              </div>
              <div class="col col-2" data-label="Product Name">
                {{ item.name }}
              </div>
              <div class="col col-3" data-label="Unit">{{ item.sqm }} Sqm</div>
              <div class="col col-4" data-label="Amount">
                &#x20a6;{{ item.price }}
              </div>
            </li>
            <li class="table-row" v-if="items.length === 0" colspan="4">
              No item in cart.
            </li>
          </ul>

          <button class="float" @click="payment" v-if="items.length > 0">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "CheckOutComponent",
  data() {
    return {};
  },
  methods: {
    payment() {
      if (this.$store.getters.loggedIn) {
        this.$router.push("/payments");
      } else {
        this.$router.push("/login");
      }
    },
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  watch: {
    // cartUpdate(newValue) {
    //   if (newValue === true) {
    //     this.items = localStorage.getItem("items")
    //       ? JSON.parse(localStorage.getItem("items"))
    //       : [];
    //     this.$store.dispatch("initializeCartUpdate");
    //   }
    // },
  },
};
</script>

<style>
.float {
  float: right !important;
}

.lh-condensed {
  line-height: 1.25;
}

.space-table {
  padding: 30px !important;
}
</style>

<style lang="scss" scoped>
h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
  small {
    font-size: 0.5em;
  }
}

.responsive-table {
  margin-right: 15px;
  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .table-header {
    background-color: #4c4c4c;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }
  .col-1 {
    flex-basis: 10%;
  }
  .col-2 {
    flex-basis: 40%;
  }
  .col-3 {
    flex-basis: 25%;
  }
  .col-4 {
    flex-basis: 25%;
  }

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row {
      background-color: #e1e1e1;
    }
    li {
      display: block;
    }
    .col {
      flex-basis: 100%;
    }
    .col {
      display: block;
      padding: 10px 0;
      &:before {
        color: #000;
        font-size: 1.2em;
        font-weight: bold;
        // padding: 10px;
        content: attr(data-label);
        // flex-basis: 50%;
        text-align: left;
        // background-color: #000;
        margin-right: 10px;
      }
    }
  }
}
</style>
