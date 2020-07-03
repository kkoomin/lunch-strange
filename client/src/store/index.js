import Vue from "vue";
import Vuex from "vuex";

import place from "./modules/place";
import post from "./modules/post";
import auth from "./modules/auth";
import filter from "./modules/filter";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    place,
    post,
    auth,
    filter,
  },
});
