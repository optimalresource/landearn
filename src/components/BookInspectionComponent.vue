<template>
  <div>
    <div class="wrapper">
      <section class="login-content">
        <div class="container h-100">
          <div
            class="row justify-content-center align-items-center height-self-center"
          >
            <div class="col-md-5 col-sm-12 col-12 align-self-center">
              <div v-if="bookInspectionDiv" class="card margin">
                <div class="card-body text-center">
                  <h4 class="mb-3">Book Inspection</h4>
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="text"
                            name="book_name"
                            id="book_name"
                            v-model="details.fullname"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="email"
                            name="book_email"
                            id="book_email"
                            v-model="details.email"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            type="number"
                            class="form-control"
                            name="number"
                            id="age"
                            v-model="book.phone_number"
                            min="0"
                          />
                          <label class="form-label" for="book_phone_number"
                            >Phone Number</label
                          >
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <select class="form-control" v-model="book.day" id="">
                          <option value="">Pick a day</option>
                          <option v-for="(day_of_the_week, index) in day_of_the_weeks" :key="index">{{day_of_the_week}}</option>
                          
                        </select>
                      </div>
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            type="number"
                            class="form-control"
                            name="text"
                            id="age"
                            v-model="book.time"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <button
                      @click.prevent="bookInspection"
                      type="submit"
                      class="btn btn-primary col-12"
                    >
                      Book
                    </button>
                  </form>
                  <br />
                  <br />
                   <a
                    class="btn btn-outline-dark float-left col-md-5 col-sm-12 col-12 mb-2"
                    href="/dashboard"
                    ><i class="fas fa-arrow-left"></i> Dashboard</a
                  >
                  <a
                    class=" text-center btn btn-outline-dark float-right col-md-5 col-sm-12 col-12"
                    href="/"
                    ><i class="fas fa-undo-alt"></i> Home page</a
                  >
                  <br />
                  <br />
                  <button
                    @click.prevent="showSpecialRequest"
                    class="text-center btn btn-info col-12"
                    href="#"
                  >
                    Want a convenient day??
                  </button>
                </div>
              </div>
              <div v-if="schedule" class="card">
                <div class="card-body text-center">
                  <h4 class="">{{details.fullname}}</h4>
                  <p class="text-light">
                    <small>({{details.email}})</small>
                  </p>
                  <hr />
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <label for="">Day</label>
                        <p>{{ book.day }} {{ next_schedule }}</p>
                      </div>
                      <div class="col-lg-12">
                        <label for="">Time:</label>
                        <p>{{ book.time }}</p>
                      </div>
                      <div class="col-lg-12">
                        <label for="">Venue:</label>
                        <p>
                          {{ book.venue }}
                        </p>
                      </div>
                    </div>
                  </form>
                  <br />
                  <button
                    @click.prevent="accept"
                    class="btn btn-success float-center col-12"
                    href="#"
                  >
                    Accept
                  </button>
                  <br />
                  <br />
                  
                  
                  <a
                    class="btn btn-outline-dark float-left col-md-5 col-sm-12 col-12 mb-2"
                    href="/dashboard"
                    ><i class="fas fa-arrow-left"></i> Dashboard</a
                  >
                  <a
                    class=" text-center btn btn-outline-dark float-right col-md-5 col-sm-12 col-12"
                    href="/"
                    ><i class="fas fa-undo-alt"></i> Home page</a
                  >
                  <br />
                  <br />
                  <a
                    @click.prevent="showSpecialRequest"
                    class="text-center btn btn-info col-12"
                    href="#"
                    >Want a convenient day?</a
                  >
                </div>
              </div>
              <div v-if="showSpecial" class="card">
                <div class="card-body">
                  <h4 class="mb-3 text-center">
                    What day is convenient for you?
                  </h4>
                  <hr />
                  <div class="col-lg-12">
                    <label for="date">Date:</label>
                    <input
                      name="date"
                      class="form-control"
                      v-model="book.date"
                      type="date"
                      required
                    />
                  </div>
                  <br />
                  <div class="col-lg-12">
                    <label for="">Time:</label>
                    <input
                      class="form-control"
                      type="text"
                      name="book_name"
                      id="book_name"
                      v-model="book.time"
                      required
                    />
                  </div>
                  <br />
                  <div class="col-lg-12">
                    <label for="date">Phone Number:</label>
                    <input
                      type="number"
                      class="form-control"
                      name="number"
                      id="age"
                      v-model="book.phone_number"
                      min="0"
                    />
                  </div>
                  <br />
                  <div class="col-lg-12">
                    <label for="">Venue:</label>
                    <p class="text-mute">
                      <textarea
                        class="form-control"
                        type="text"
                        name="book_name"
                        id="disabledInput"
                        v-model="book.venue"
                        disabled
                      >
                      </textarea>
                    </p>
                  </div>
                  <br />
                  <div class="col-lg-12">
                    <h5 class="text-center ">Preview</h5>
                    <hr />
                    <p class="text-dark">Date: {{ book.date }}</p>
                    <p class="text-dark">Time: {{ book.time }}</p>
                    <p class="text-dark">
                      Phone Number: {{ book.phone_number }}
                    </p>
                    <p class="text-mute">Venue: {{ book.venue }}</p>
                  </div>
                  <br />
                  <button
                    href="#"
                    @click.prevent="bookSpecial"
                    type="submit"
                    class="btn btn-info col-12"
                  >
                    <i class="fas fa-check-circle"></i> Book Now
                  </button>
                  <br />
                  <br />
                 <a
                    class="btn btn-outline-dark float-left col-md-5 col-sm-12 col-12 mb-2"
                    href="/dashboard"
                    ><i class="fas fa-arrow-left"></i> Dashboard</a
                  >
                  <a
                    class=" text-center btn btn-outline-dark float-right col-md-5 col-sm-12 col-12"
                    href="/"
                    ><i class="fas fa-undo-alt"></i> Home page</a
                  >
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import axios from "axios"
export default {
  name: "BookInspectionComponent",
  data: function() {
    return {
      details: JSON.parse(localStorage.getItem("user")),
      onLine: navigator.onLine,
      bookInspectionDiv: true,
      schedule: false,
      showSpecial: false,
      next_schedule: "",
      current_day: new Date().toLocaleString(),
      day_of_the_weeks:[],
      book: {
        name: "",
        day: "",
        email: "",
        phone_number: "",
        date: "",
        time: "",
        venue: ""
      }
    };
  },
  methods: {
    updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === "online";
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
      return re.test(email);
    },
    bookInspection: function() {
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   return false;
      // }
      if (this.book.phone_number == "") {
        this.$toasted.error("Please enter phone number");
        return false;
      }
      if (this.book.day == "") {
        this.$toasted.error("Please pick a suitable day");
        return false;
      }
      this.bookSchedule();
      this.getDate();
      
    },
    bookSchedule: function() {
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   return false;
      // }
      this.schedule = true;
      this.bookInspectionDiv = false;
    },
    showSpecialRequest: function() {
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   return false;
      // }
      this.showSpecial = true;
      this.schedule = false;
      this.bookInspectionDiv = false;
    },
    bookSpecial: function() {
      // if (!this.onLine) {
      //   this.$toasted.error("Please check your internet connection");
      //   return false;
      // }
      if (this.book.date == "") {
        this.$toasted.error("Please enter a convenient date");
        return false;
      }
      this.$toasted.success("Date created");
      this.$toasted.info("We've sent you an email");
    },
    accept: function() {
      // na here I wan do my communication to the back end
      this.$toasted.success("Thank you. We've made reservations for you");
    },
   getDate(arrOfDays = []) {
    var cur = "";
    var diff = "";
    var days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    var result = [];
    var error = [];
    let month = "";
    let day = "";
    let year = "";
    let output = "";
    let dayOfWeek = "";
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    for (let i = 0; i < arrOfDays.length; i++) {
      if (days.indexOf(arrOfDays[i]) == -1) {
        error.push("Wrong day " + arrOfDays[i] + " supplied");
        continue;
      }

      cur = new Date();
      if (cur.getDay() > days.indexOf(arrOfDays[i])) {
        diff = cur.getDay() - days.indexOf(arrOfDays[i]);
        cur.setDate(cur.getDate() + (7 - diff));
      } else if (cur.getDay() < days.indexOf(arrOfDays[i])) {
        cur.setDate(cur.getDate() + days.indexOf(arrOfDays[i]) - cur.getDay());
      } else {
        cur.setDate(cur.getDate() + 7);
      }
      month = monthNames[cur.getMonth()];
      dayOfWeek = days[cur.getDay()];
      dayOfWeek = dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1);
      day = String(cur.getDate()).padStart(2, '0');
      year = cur.getFullYear();
      output = dayOfWeek + ' ' + month  + '\n'+ day  + ', ' + year;
      // result.push(cur);
  this.day_of_the_weeks.push(output)

  }
  
  console.log(result);
  // var result = 
  console.log(error);
},

  },
  components: {},
  watch: {
    onLine(v) {
      if (v) {
        this.showBackOnline = true;
        setTimeout(() => {
          this.showBackOnline = false;
        }, 1000);
      }
    }
  },
  mounted() {
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
    this.getDate(["sunday", "monday"]);
  },
  created(){
    //  var accessToken = localStorage.getItem("token") || "";
    // const headers = {
    //   Authorization: "Bearer " + accessToken,
    //   "My-Custom-Header": "Register step 2"
    // };
    //  axios
    //   .get("", {
    //     headers
    //   })
    //   .then(response => {
    //     console.log(response);
        
    //   })
    //   .catch(error => {
    //     this.errorMessage = error.message;
    //     console.error("There was an error!", error);
    //   });
  }
};
</script>
<style scoped></style>
