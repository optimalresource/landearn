<template>
  <div>
    <div class="wrapper">
      <section class="login-content">
        <div class="container h-100">
          <div
            class="row justify-content-center align-items-center height-self-center"
          >
            <div class="col-md-5 col-sm-12 col-12 align-self-center">
              <div v-if="bookInspectionDiv" class="card">
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
                            v-model="book.name"
                            required
                          />
                          <label class="form-label" for="book_name">Name</label>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="email"
                            name="book_email"
                            id="book_email"
                            v-model="book.email"
                            required
                          />
                          <label class="form-label" for="book_email"
                            >Email</label
                          >
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="tel"
                            name="book_phone_number"
                            id="book_phone_number"
                            v-model="book.phone_number"
                            required
                          />
                          <label class="form-label" for="book_phone_number"
                            >Phone Number</label
                          >
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="text"
                            name="book_Project_name"
                            id="book_Project_name"
                            v-model="book.Project_name"
                            required
                          />
                          <label class="form-label" for="book_Project_name"
                            >Project Name</label
                          >
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <select class="form-control" v-model="book.day" id="">
                          <option value="">Pick a day</option>
                          <option value="Monday">Monday</option>
                          <option value="Friday">Friday</option>
                        </select>
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
                  <a class="btn btn-outline-dark float-left" href="/dashboard"
                    >Dashboard</a
                  >
                </div>
              </div>
              <div v-if="schedule" class="card">
                <div class="card-body text-center">
                  <h4 class="mb-3">Our schedule</h4>
                  <hr />
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <label for="">Day</label>
                        <p>{{ book.day }}</p>
                      </div>
                      <div class="col-lg-12">
                        <label for="">Time:</label>
                        <p>11pm</p>
                      </div>
                      <div class="col-lg-12">
                        <label for="">Venue:</label>
                        <p>
                          Mega Chicken off lekki-epe express way Lagos Nigeria
                        </p>
                      </div>
                    </div>
                  </form>
                  <br />
                  <a
                    @click.prevent="accept"
                    class="btn btn-dark float-center"
                    href="#"
                    >Accept</a
                  >
                  <br />
                  <br />
                  <a
                    @click.prevent="showSpecialRequest"
                    class="text-center btn btn-info col-12"
                    href="#"
                    >Want a convenient day?</a
                  >
                  <br />
                  <br />

                  <a class="btn btn-outline-dark float-left" href="/dashboard"
                    >Dashboard</a
                  >
                </div>
              </div>
              <div v-if="showSpecial" class="card">
                <div class="card-body">
                  <h4 class="mb-3 text-center">Book a date</h4>
                  <hr />
                  <div class="col-lg-12">
                    <label for="date">Date</label>
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
                    <label for="">Time</label>
                    <p class="text-primary">11pm</p>
                  </div>
                  <div class="col-lg-12">
                    <label for="">Venue</label>
                    <p class="text-primary">
                      Mega Chicken off lekki-epe express way Lagos Nigeria
                    </p>
                  </div>
                  <br />
                  <div class="col-lg-12">
                    <p class="text-dark">Date: {{ book.date }}</p>
                    <p class="text-dark">Time: 11pm</p>
                    <p class="text-dark">
                      Venue: Mega Chicken off lekki-epe express way Lagos
                      Nigeria
                    </p>
                  </div>
                  <br />
                  <button
                    href="#"
                    @click.prevent="bookSpecial"
                    type="submit"
                    class="btn btn-info col-12"
                  >
                    Book Now
                  </button>
                  <br />
                  <br />
                  <a class="btn btn-outline-dark float-left" href="/dashboard"
                    >Dashboard</a
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
export default {
  name: "BookInspectionComponent",
  data: function() {
    return {
      onLine: navigator.onLine,
      bookInspectionDiv: true,
      schedule: false,
      showSpecial: false,
      book: {
        name: "",
        day: "",
        email: "",
        phone_number: "",
        date: "",
        Project_name: "",
        time: "",
        venue: "",
      },
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
      if (this.book.name == "") {
        this.$toasted.error("Please enter name");
        return false;
      }
      if (this.book.day == "") {
        this.$toasted.error("Please select a day");
        return false;
      }
      if (this.book.email == "") {
        this.$toasted.error("Please enter email");
        return false;
      }
      if (!this.validateEmail(this.book.email)) {
        this.$toasted.error("Please enter a valid email");
        return false;
      }
      if (this.book.phone_number == "") {
        this.$toasted.error("Please enter phone number");
        return false;
      }
      this.bookSchedule();
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
      this.$toasted.success("Thank you. We've made reservations for you");
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
    },
  },
  mounted() {
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
  },
};
</script>
