import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import ResultPage from "../views/ResultPage.vue";
import AboutUsPage from "../views/AboutUsPage.vue";
import CanteenPage from "../views/CanteenPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/result",
    name: "ResultPage",
    component: ResultPage,
  },
  {
    path: "/about",
    name: "AboutUsPage",
    component: AboutUsPage,
  },
  {
    path: "/canteen",
    name: "CanteenPage",
    component: CanteenPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
