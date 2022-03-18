import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Books from "../views/Books.vue";
import CategorySlug from "../views/Category.vue";
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
      // @ts-ignore
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Categories",
    name: "categories",
    component: Categories,
  },
  {
    path: "/Books",
    name: "books",
    component: Books,
  },

  {
    path: "/category/:slug",
    name: "category",
    component: CategorySlug,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
