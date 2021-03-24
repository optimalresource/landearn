import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import CartItem from "./cart_item";
import createMutationsSharer from "vuex-shared-mutations";

Vue.use(Vuex);
axios.default.baseURL = "https://api.landearn.com/api";

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    newUser: localStorage.getItem("newUser") || 0,
    cartUpdate: null,
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],
    updated: false,
  },
  mutations: {
    accountRegistered(state, token, user) {
      state.token = token;
      state.user = user;
      state.newUser = 1;
    },
    accountLoggedIn(state, token, user) {
      state.token = token;
      state.user = user;
    },
    refreshUser(state, user) {
      state.user = user;
    },
    destroyToken(state) {
      state.token = null;
    },
    cartUpdated(state, items) {
      // state.cartUpdate = true;
      state.items = items;
    },
    cartInitialized(state) {
      state.cartUpdate = null;
    },
    updateStatus(state) {
      state.updated = true;
    },
  },
  actions: {
    registerAccount(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://api.landearn.com/api/register", {
            email: credentials.details.email,
            password: credentials.details.password,
            fullname: credentials.details.fullname,
            ref_code: credentials.details.ref_code,
          })
          .then((response) => {
            const token = response.data.accessToken;
            const user = response.data.user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("newUser", 1);
            context.commit("accountRegistered", token, user);
            resolve(response);
            console.log(response);
          })
          .catch((error) => {
            if (error.response) {
              reject(error.response.data);
            } else {
              reject(error);
            }
          });
      });
    },
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        console.log(credentials.details.password);
        axios
          .post("https://api.landearn.com/api/login", {
            email: credentials.details.email,
            password: credentials.details.password,
          })
          .then((response) => {
            const token = response.data.accessToken;
            const user = response.data.user;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            context.commit("accountLoggedIn", token, user);
            resolve(response);
            console.log(response);
          })
          .catch((error) => {
            if (error.response) {
              reject(error.response.data);
            } else {
              reject(error);
            }
          });
      });
    },
    validateToken(context) {
      return new Promise((resolve, reject) => {
        var accessToken = localStorage.getItem("token") || "";
        const headers = {
          Authorization: "Bearer " + accessToken,
          "My-Custom-Header": "GetUserRecord",
        };

        var request = {};
        axios
          .get("https://api.landearn.com/api/user", request, {
            headers,
          })
          .then((response) => {
            const user = response.data.user;
            localStorage.setItem("user", user);
            context.commit("refreshUser", user);
            resolve(response);
          })
          .catch((error) => {
            if (error.response) {
              reject(error.response.data);
            } else {
              reject(error);
            }
          });
      });
    },
    logout(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          var accessToken = localStorage.getItem("token") || "";
          const headers = {
            Authorization: "Bearer " + accessToken,
            "My-Custom-Header": "Logout",
          };

          var request = {};

          axios
            .post("https://api.landearn.com/api/logout", request, {
              headers,
            })
            .then((response) => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("newUser");
              context.commit("destroyToken");
              resolve(response);
            })
            .catch((error) => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("newUser");
              context.commit("destroyToken");
              if (error.response) {
                reject(error.response.data);
              } else {
                reject(error);
              }
            });
        });
      }
    },
    setCartUpdate(context, credentials) {
      // console.log(credentials.items);
      context.commit("cartUpdated", credentials.items);
    },
    initializeCartUpdate(context) {
      context.commit("cartInitialized");
    },
    updatePersonalDetails(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://api.landearn.com/api/login", {
            phone: credentials.details.phone,
            facebook_username: credentials.details.facebook_username,
            twitter_username: credentials.details.twitter_username,
            instagram_username: credentials.details.instagram_username,
            linkedin_username: credentials.details.linkedin_username,
            address: credentials.details.address,
          })
          .then((response) => {
            context.commit("updateStatus");
            resolve(response);
          })
          .catch((error) => {
            if (error.response) {
              reject(error.response.data);
            } else {
              reject(error);
            }
          });
      });
    },
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
    cartUpdated(state) {
      return state.cartUpdate !== null;
    },
  },
  modules: {
    // CartItem,
  },
  plugins: [
    createMutationsSharer({
      predicate: ["cartUpdated", "cartInitialized"],
    }),
  ],
});
