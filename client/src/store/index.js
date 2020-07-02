import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

import place from "./modules/place";
import post from "./modules/post";
import auth from "./modules/auth";
import location from "./modules/location";
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
    location,
    filter,
  },
});
