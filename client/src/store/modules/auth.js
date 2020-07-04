import qs from "qs";
// import router from "@/router";
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
    const token = qs.parse(location.hash.replace("#", "")).token;
    console.log(token);
    if (token) {
      cookies.set("k_token", token);
      commit("setToken", token);
    }
  },
  async getUserInfo(context, token) {
    const result = await axios.post(
      `${process.env.VUE_APP_SERVER_URL}auth/getUserInfo`,
      { token }
    );
    console.log(result);
    alert(result.data.u_nickname);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
