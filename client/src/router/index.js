import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import ResultPage from "../views/ResultPage.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
