import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

import place from "./modules/place";
import post from "./modules/post";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: {
      price: null,
      distance: null,
      category: null,
    },
  },
  mutations: {},
  actions: {},
  modules: {
    place,
    post,
    auth,
  },
});
