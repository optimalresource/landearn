<template>
  <div>
    <UserHeader />
    <div class="content-page">
      <div class="container-fluid container">
        <div class="col-md-12 col-lg-12">
          <div class="card card-block card-stretch card-height card-margin-top">
            <div class="card-header">
              <div class="header-title">
                <h4 class="card-title">ORDER HISTORY</h4>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table id="customers">
                  <tr>
                    <th>Project</th>
                    <th>Price</th>
                    <th>TIme</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td class="text-success">Paid</td>
                  </tr>
                  <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                    <td class="text-warning">pending</td>
                  </tr>
                  <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                    <td class="text-success">Paid</td>
                  </tr>
                  <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                    <td>Sweden</td>
                    <td class="text-success">Paid</td>
                  </tr>
                  <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td class="text-warning">Pending</td>
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
import UserFooter from "@/components/UserFooter.vue";
import UserHeader from "@/components/UserHeader.vue";
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
  }
};
</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  color: #000000;
}

#customers td,
#customers th {
  border: 1px solid rgb(213, 213, 213);
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: rgb(189, 189, 189);
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
