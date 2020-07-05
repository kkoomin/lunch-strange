import qs from "qs";
import cookies from "vue-cookies";
import axios from "axios";

const state = { token: null };
const getters = { isLoggedIn: (state) => !!state.token };
const mutations = { setToken: (state, token) => (state.token = token) };
const actions = {
  logout: () => {
    // const token = cookies.get("k_token");

    const kakao_app_key = process.env.VUE_APP_KAKAO_API_KEY;
    const redirect_uri = `${process.env.VUE_APP_SERVER_URL}auth/logout`;
    // #token=${token}
    const fullUrl = `https://kauth.kakao.com/oauth/logout?client_id=${kakao_app_key}&logout_redirect_uri=${redirect_uri}`;
    location.href = fullUrl;
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
  finalizeLogout({ commit }) {
    cookies.remove("k_token");
    cookies.remove("u_nickname");
    cookies.remove("u_id");
    commit("setToken", null);
    alert("👋🏻 로그아웃되었습니다!");
  },
  async getUserInfo(context, token) {
    const result = await axios.post(
      `${process.env.VUE_APP_SERVER_URL}auth/getUserInfo`,
      { token }
    );
    console.log(result);
    cookies.set("u_nickname", result.data.u_nickname);
    cookies.set("u_id", result.data.u_id);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
