import qs from "qs";
import router from "@/router";
import cookies from "vue-cookies";
import axios from "axios";

const state = { token: null };
const getters = { isLoggedIn: (state) => !!state.token };
const mutations = { setToken: (state, token) => (state.token = token) };
const actions = {
  logout: ({ commit }) => {
    const kakao_app_key = process.env.VUE_APP_KAKAO_API_KEY;
    const redirect_uri = process.env.VUE_APP_SERVER_URL + "auth/logout";
    const fullUrl = `https://kauth.kakao.com/oauth/logout?client_id=${kakao_app_key}&logout_redirect_uri=${redirect_uri}`;
    location.href = fullUrl;

    cookies.remove("k_token");
    commit("setToken", null);
  },
  login: () => {
    const kakao_app_key = process.env.VUE_APP_KAKAO_API_KEY;
    const redirect_uri = process.env.VUE_APP_SERVER_URL + "auth";
    const fullUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao_app_key}&redirect_uri=${redirect_uri}&response_type=code`;
    location.href = fullUrl;
  },
  finalizeLogin({ commit }) {
    console.log(qs.parse(location.search.replace("?", "")));
    const token = qs.parse(location.search.replace("?", "")).token;
    if (token) {
      cookies.set("k_token", token);
      commit("setToken", token);
      // commit("getUserInfo", token)
    }
    // window.location.href = "https://lunch-strange.netlify.app/";
    router.push("/");
  },
  async getUserInfo(token) {
    const result = axios.post(
      `${process.env.VUE_APP_SERVER_URL}auth/getUserInfo`,
      { token }
    );
    console.log(result);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
