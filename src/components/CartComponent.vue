<template>
  <div>
    <a
      href="#"
      class="btn btn-sm carted"
      @click.prevent="showCart = !showCart"
      v-show="!verified"
      ><img src="images/cart.svg" alt="My cart" height="27" width="27" />
      <div :class="{ loaded: items.length }">{{ items.length }}</div></a
    >
    <div class="cart" v-show="showCart">
      <div v-show="items.length > 0">
        <ul>
          <li v-for="(item, index) in items" :key="index" transition="fade">
            <p>
              <strong>{{ item.sqm }} M<sup>2</sup></strong> - {{ item.name }} -
              &#x20a6;{{ item.price }}
              <i class="fa fa-trash" @click="removeFromCart(item)"></i>
            </p>
          </li>
        </ul>
        <div>
          <!-- <button @click="(verified = true), (showCart = false)">
            Check out
          </button> -->
          <button @click="checkout">
            Check out
          </button>
        </div>
      </div>
      <div v-show="items.length === 0">
        <p>Your cart is empty!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartComponent",
  data() {
    return {
      showCart: false,
      verified: false,
      quantity: 1,
    };
  },
  computed: {
    items() {
      // console.log(typeof this.$store.state.items);
      return this.$store.state.items;
    },
  },
  methods: {
    removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
      var items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
      items.splice(this.items.indexOf(item), 1);
      items = JSON.parse(JSON.stringify(items));
      items = JSON.stringify(items);
      localStorage.setItem("items", items);
      this.$store.dispatch("setCartUpdate", { items: JSON.parse(items) });
      this.$toasted.error("One item removed from cart");
      return true;
    },
    total() {
      var total = 0;
      for (var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    },
    checkout() {
      this.showCart = false;
      this.$router.push({ name: "Checkout" });
    },
  },
  mounted() {
    console.log(this.items);
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

<style scoped>
.carted {
  padding: 8px 28px 6px 12px !important;
  background: transparent !important;
  border-color: transparent !important;
}

.carted:hover,
.carted:not(.btn-border):hover {
  background: #eee !important;
}

.carted div {
  display: block;
  position: absolute;
  top: 2px;
  left: 37px;
  /* background: gold; */
  padding: 2px 5px;
  border-radius: 50%;
  color: #000;
  border: 1px solid #48a8fc;
  line-height: 1.2;
}

.loaded {
  color: #fff !important;
  background: #48a8fc;
  border: 1px solid #48a8fc !important;
  padding: 2px 7px !important;
}
</style>

<style lang="scss" scoped>
.header {
  height: 80px;
  h2 {
    color: #fff;
    font-family: "Rock Salt";
    float: left;
    font-weight: bolder;
    margin: 10px 20px;
  }
  button {
    border: 0;
    background: #ffdbe0;
    transition: all 0.1s ease-out;
    &:hover {
      background: darken(#ffdbe0, 2%);
    }
  }
  div {
    float: right;
    display: inline;
    margin: 10px;
  }
}

li {
  list-style: none;
}

.fa {
  cursor: pointer;
  margin-left: 5px;
}

.fade-transition {
  transition: all 0.2s ease-out;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}

.cart {
  > div {
    z-index: 100;
    background: #fff;
    padding: 20px 30px;
    position: absolute;
    right: 15px;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
    div {
      text-align: center;
    }
  }
  ul,
  li,
  p {
    margin-bottom: 0;
  }
  button {
    margin: 20px 0 10px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 2px;
  }
  input {
    width: 30px;
  }
}

.shop {
  h3 {
    position: absolute;
    top: -85px;
    left: -30px;
    color: rgba(255, 255, 255, 0.3);
    font-family: sans-serif;
    font-size: 4em;
    font-weight: bold;
    letter-spacing: -2px;
  }
  ul {
    margin-top: 90px;
  }
  li div {
    padding: 30px;
    background: #fff;
    margin-bottom: 20px;
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3);
  }
  button {
    color: white;
    border: 0;
    background: #00adb5;
    margin: 0;
    transition: all 0.1s ease-out;
    &:hover {
      background: darken(#00adb5, 5%);
    }
  }
}

.checkout {
  background: #fff;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3);
  margin-top: 90px;
  padding: 50px 60px;
  h3 {
    position: absolute;
    top: -85px;
    left: -30px;
    color: rgba(255, 255, 255, 0.3);
    font-family: sans-serif;
    font-size: 4em;
    font-weight: bold;
    letter-spacing: -2px;
  }
  span {
    float: right;
  }
}

@media screen and (max-width: 630px) {
  .checkout {
    padding: 30px 40px;
    h5 {
      font-size: 1.2em;
    }
  }
}

@media screen and (max-width: 550px) {
  .shop h3,
  .checkout h3 {
    font-size: 3.3em;
    top: -70px;
    left: 0px;
  }
}
</style>
