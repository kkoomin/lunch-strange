import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import ResultPage from "../views/ResultPage.vue";
import PlacePage from "../views/PlacePage.vue";
import CanteenPage from "../views/CanteenPage.vue";
import CanteenSupportPage from "../views/CanteenSupportPage.vue";
import CVSPage from "../views/CVSPage.vue";
import CVSWritePage from "../views/CVSWritePage.vue";
import CVSReadPage from "../views/CVSReadPage.vue";
import LoginPage from "../views/LoginPage.vue";
import KakaoAuth from "../views/KakaoAuth.vue";

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
    path: "/place/:id",
    name: "PlacePage",
    component: PlacePage,
  },
  {
    path: "/canteen",
    name: "CanteenPage",
    component: CanteenPage,
  },
  {
    path: "/canteen/support",
    name: "CanteenSupportPage",
    component: CanteenSupportPage,
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
  {
    path: "/auth",
    name: "KakaoAuth",
    component: KakaoAuth,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {});

export default router;
