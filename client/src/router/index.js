import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import ResultPage from "../views/ResultPage.vue";
import AboutUsPage from "../views/AboutUsPage.vue";
import CanteenPage from "../views/CanteenPage.vue";
import CVSPage from "../views/CVSPage.vue";
import CVSWritePage from "../views/CVSWritePage.vue";
import CVSReadPage from "../views/CVSReadPage.vue";
import LoginPage from "../views/LoginPage.vue";

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
  {
    path: "/cvs",
    name: "CVSPage",
    component: CVSPage,
  },
  {
    path: "/cvs/write",
    name: "CVSWritePage",
    component: CVSWritePage,
  },
  {
    path: "/cvs/:id",
    name: "CVSReadPage",
    component: CVSReadPage,
  },
  {
    path: "/user",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {});

export default router;
