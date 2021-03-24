<template>
  <div>
    <UserHeader />
    <div class="content-page">
      <div class="container-fluid container">
        <div class="col-md-12 col-lg-12">
          <div class="card card-block card-stretch card-height card-margin-top">
            <div class="card-header">
              <div class="header-title">
                <h4 class="card-title">Second Level Referrals</h4>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table id="customers">
                  <tr>
                    <th>Email</th>
                    <th>Amount Earned</th>
                  </tr>
                  <tr>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                  </tr>
                  <tr>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                  </tr>
                  <tr>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                  </tr>
                  <tr>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                  </tr>
                  <tr>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UserFooter />
  </div>
</template>

<script>
import axios from "axios";
import UserFooter from "@/components/UserFooter.vue";
import UserHeader from "@/components/UserHeader.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // details: {
      //   fullname: "klsfvkler",
      //   email: "wnlkss",
      //   amount_earned: "kldsksnlk"
      // },
      items: localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [],
      showCart: false,
      verified: false,
      quantity: 1
    };
  },
  components: {
    UserFooter,
    UserHeader
  },
  computed: mapState(["cartUpdate"]),
  methods: {
    getPosts() {
      for (let i = 0; i++; ) {
        this.details.push({
          fullname: "",
          email: "",
          amount_earned: "",
          suffix: i + 1
        });
      }
    },
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
    }
  },
  mounted() {
    console.log(this.items);
  },
  watch: {
    cartUpdate(newValue) {
      if (newValue === true) {
        this.items = localStorage.getItem("items")
          ? JSON.parse(localStorage.getItem("items"))
          : [];
        this.$store.dispatch("initializeCartUpdate");
      }
    }
  },
  created() {
    var accessToken = localStorage.getItem("token") || "";
    const headers = {
      Authorization: "Bearer " + accessToken,
      "My-Custom-Header": "Referrals"
    };
    axios
      .get("", {
        headers
      })
      .then(response => {
        console.log(response);
        this.details.fullname = response.data.fullname;
        this.details.email = response.data.email;
        this.details.amount_earned = response.data.amount_earned;
        // this.details.email = response.data.email;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    this.getPosts();
  }
};
</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #d8d8d8;
}

#customers tr:hover {
  background-color: rgb(182, 182, 182);
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #000000;
  color: white;
  text-align: center;
}
.wrap {
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 10pc;
  margin-left: 10pc;
}
@media (max-width: 1125px) {
  .wrap {
    margin-top: 30px;
    margin-bottom: 20px;
    margin-right: 1pc;
    margin-left: 1pc;
  }
}
/* .card-margin-top {
  margin-top: 30px !important;
} */
</style>
