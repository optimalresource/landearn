<template>
  <div>
    <UserHeader />
    <div class="wrapper">
      <section class="login-content">
        <div class="container h-100">
          <div
            class="row justify-content-center align-items-center height-self-center"
          >
            <div
              v-if="showdiv"
              class="col-md-5 col-sm-12 col-12 align-self-center"
            >
              <div class="card">
                <div class="card-body text-center">
                  <h4 class="mb-3">Reset Password</h4>
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="password"
                            name="old_password"
                            id="old_password"
                            v-model="update.oldPassword"
                            required
                          />
                          <label class="form-label" for="password"
                            >Old Password</label
                          >
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="password"
                            name="new_password"
                            id="new_password"
                            v-model="update.newPassword"
                            required
                          />
                          <label class="form-label" for="password"
                            >New Password</label
                          >
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="password"
                            name="password"
                            id="password1"
                            v-model="update.confirmPassword"
                            required
                          />
                          <label class="form-label" for="password1"
                            >Confirm New Password</label
                          >
                        </div>
                      </div>
                    </div>
                    <button
                      @click.prevent="changePassword"
                      type="submit"
                      class="btn btn-primary col-12"
                    >
                      Confirm
                    </button>
                    <br />
                    <br />
                    <div class="col-lg-12">
                      <a
                        @click.prevent="fogotPassword"
                        href="#"
                        class="text-primary"
                        >Forgot Password?</a
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              v-if="fogot == true"
              class="col-md-5 col-sm-12 col-12 align-self-center"
            >
              <div class="card">
                <div class="card-body text-center">
                  <h5 class="mb-3">Please Enter Token</h5>
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="text"
                            name="token"
                            id="token"
                            v-model="token"
                            required
                          />
                          <label class="form-label" for="password">Token</label>
                        </div>
                      </div>
                    </div>
                    <button
                      @click.prevent="confirmToken"
                      type="submit"
                      class="btn btn-primary col-12"
                    >
                      Confirm
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div
              v-if="newPassword == true"
              class="col-md-5 col-sm-12 col-12 align-self-center"
            >
              <div class="card">
                <div class="card-body text-center">
                  <h5 class="mb-3">Change Password</h5>
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="password"
                            name="new_password"
                            id="new_password"
                            v-model="update.newPassword"
                            required
                          />
                          <label class="form-label" for="password"
                            >New Password</label
                          >
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="floating-input form-group">
                          <input
                            class="form-control"
                            type="password"
                            name="password"
                            id="password1"
                            v-model="update.confirmPassword"
                            required
                          />
                          <label class="form-label" for="password1"
                            >Confirm New Password</label
                          >
                        </div>
                      </div>
                    </div>
                    <button
                      @click.prevent="updateNewPassword"
                      type="submit"
                      class="btn btn-primary col-12"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div
              v-if="updated"
              class="col-md-5 col-sm-12 col-12 align-self-center"
            >
              <div class="card">
                <div class="card-body text-center">
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div>
                          <h3 class="text-center">Password Changed</h3>
                          <div class="text-center mt-5">
                            <a href="/dashboard">Dashboard</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <UserFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import UserFooter from "@/components/UserFooter.vue";
import UserHeader from "@/components/UserHeader.vue";
// import ChangePasswordComponent from "@/components/ChangePasswordComponent.vue";

export default {
  name: "ChangePasswordComponent",
  components: {
    UserFooter,
    UserHeader,
    // ChangePasswordComponent
  },
  data: function() {
    return {
      onLine: navigator.onLine,
      showBackOnline: false,
      updated: false,
      showdiv: true,
      fogot: false,
      newPassword: false,
      token: "",
      update: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    changePassword: function() {
      if (!this.onLine) {
        this.$toasted.error("Please check your internet connection");
        return false;
      }
      if (this.update.oldPassword == "") {
        this.$toasted.error("Please enter Old Password");
        return false;
      }
      if (this.update.newPassword == "") {
        this.$toasted.error("Please enter New Password");
        return false;
      }
      if (this.update.confirmPassword == "") {
        this.$toasted.error("Please confirm New Password");
        return false;
      }
      if (this.update.newPassword !== this.update.confirmPassword) {
        this.$toasted.error("Password and Confirm Password does not Match");
        return false;
      }
    },
    fogotPassword: function() {
      if (!this.onLine) {
        this.$toasted.error("Please check your internet connection");
        return false;
      }
      this.$toasted.info("A token has been sent to your email");
      this.fogot = true;
      this.showdiv = false;
    },
    confirmToken: function() {
      if (!this.onLine) {
        this.$toasted.error("Please check your internet connection");
        return false;
      }
      if (this.token == "") {
        this.$toasted.error("Please enter token");
        return false;
      }
      this.$toasted.success("Token accepted");
      this.showdiv = false;
      this.fogot = false;
      this.newPassword = true;
    },
    updateNewPassword: function() {
      if (!this.onLine) {
        this.$toasted.error("Please check your internet connection");
        return false;
      }
      if (this.update.newPassword == "") {
        this.$toasted.error("Please enter a new password");
        return false;
      }
      if (this.update.newPassword == "") {
        this.$toasted.error("Please enter a confirm password");
        return false;
      }
      if (this.update.newPassword !== this.update.confirmPassword) {
        this.$toasted.error("Password and Confirm Password does not Match");
        return false;
      }
      this.newPassword = false;
      this.updated = true;
    },
    updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === "online";
    },
  },
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

<style></style>
