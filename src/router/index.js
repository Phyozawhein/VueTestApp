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
    props: true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    props: true
  },
  {
    path: "/store",
    name: "Store",
    component: () =>
      import(/* webpackChunkName: "store" */ "../views/Store.vue"),
    props: true
  },
  {
    path: "/travel",
    name: "travel",
    component: () =>
      import(/* webpackChunkName: "travel" */ "../views/Travel.vue"),
    props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "Destination Details" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "Experience Details" */ "../views/ExperienceDetails"
          )
      }
    ],
    beforeEnter: (to, from, next) => {
      const exist = store.destinations.find(
        destintation => destintation.slug === to.params.slug
      );
      if (exist) {
        next();
      } else {
        next({ name: "notFound" });
      }
    }
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "User" */ "../views/User"),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "Login" */ "../views/Login")
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () =>
      import(/* webpackChunkName: "Invoices" */ "../views/Invoices"),
    meta: { requiresAuth: true }
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "Not Found" */ "../views/NotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPositon) {
    if (savedPositon) {
      return savedPositon;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { y: 140 };
        }
        return false;
      }
    }
  },
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({ name: "login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
