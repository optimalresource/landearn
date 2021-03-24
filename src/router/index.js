import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/RegisterComponent.vue"
      ),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/LoginComponent.vue"
      ),
  },
  {
    path: "/logout",
    name: "Logout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Logout.vue"),
  },
  {
    path: "/referrals",
    name: "Referrals",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Referrals.vue"),
  },
  {
    path: "/secondLevel",
    name: "SecondLevelReferrals",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/SecondLevelReferrals.vue"
      ),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/ForgotPasswordComponent.vue"
      ),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../components/TeamComponent.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
  },
  {
    path: "/orderhistory",
    name: "Orderhistory",
    component: () => import("../components/Orderhistory.vue"),
  },
  {
    path: "/projectokeogun",
    name: "Projectokeogun",
    component: () => import("../components/Projectokeogun.vue"),
  },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: () => import("../views/Blog.vue"),
  // },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/Edit.vue"),
  },
  {
    path: "/career",
    name: "Career",
    component: () => import("../views/Career.vue"),
  },
  {
    path: "/projects",
    name: "Project",
    component: () => import("../views/Project.vue"),
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: () => import("../views/SponsorProject.vue"),
  },
  {
    path: "/site",
    name: "Site",
    component: () => import("../views/UnderCon.vue"),
  },
  {
    path: "/earn",
    name: "Earn",
    component: () => import("../views/Earn.vue"),
  },
  {
    path: "/payments",
    name: "Payments",
    component: () => import("../views/Payments.vue"),
  },
  {
    path: "/project",
    name: "FullProject",
    component: () => import("../views/FullProject.vue"),
  },
  {
    path: "/cart/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout.vue"),
  },
  {
    path: "/galleryOkeogun",
    name: "GalleryOkeogun",
    component: () => import("../views/galleryOkeogun.vue"),
  },
  {
    path: "/bookinspection",
    name: "Bookinspection",
    component: () => import("../views/Bookinspection.vue"),
  },
  {
    path: "/myProject",
    name: "MyProject",
    component: () => import("../views/MyProject.vue"),
  },
  {
    path: "/changePassword",
    name: "ChangePassword",
    component: () => import("../views/ChangePassword.vue"),
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import("../views/Faq.vue"),
  },
  // {
  //   path: "/project",
  //   name: "Project",
  //   component: () => import("../views/Project.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token")) {
    store
      .dispatch("validateToken")
      .then((response) => {
        console.log(response);
        if (response.status != "200") {
          if (to.name == "Dashboard") {
            next("/login");
          }
        }
      })
      .catch((error) => {
        if (typeof error === "object" && error !== null) {
          for (const property in error) {
            this.$toasted.error(error[property]);
          }
        } else {
          this.$toasted.error(error);
        }
        if (to.name == "Dashboard") {
          next("/login");
        }
      });

    if (to.name == "Register" || to.name == "Login") {
      next("/dashboard");
    } else {
      next();
    }
  } else {
    if (to.name == "Dashboard") {
      next("/login");
    }
    next();
  }
});

export default router;
