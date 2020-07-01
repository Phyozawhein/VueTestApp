import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
            /* webpackChunkName: "Destination Details" */ "../views/ExperienceDetails"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
