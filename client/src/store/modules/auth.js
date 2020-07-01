// import qs from "qs";
import router from "@/router";
// import cookies from "vue-cookies";
import axios from "axios";

const state = { token: "" };
const getters = { isLoggedIn: (state) => !!state.token };
const mutations = { setToken: (state, token) => (state.token = token) };
const actions = {
  logout: ({ commit }) => {
    // const kakao_app_key = process.env.VUE_APP_KAKAO_API_KEY;
    // const redirect_uri = "http://localhost:8080/";
    // const fullUrl = `https://kauth.kakao.com/oauth/logout?client_id=${kakao_app_key}?&logout_redirect_uri=${redirect_uri}`;
    // window.open(fullUrl);

    commit("setToken", null);
    location.pathname = "/";
  },
  login: () => {
    const kakao_app_key = process.env.VUE_APP_KAKAO_API_KEY;
    const redirect_uri = process.env.VUE_APP_SERVER_URL;
    const fullUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao_app_key}&redirect_uri=${redirect_uri}&response_type=code`;
    location.href = fullUrl;
  },
  finalizeLogin({ commit }) {
    axios.post("http://70.12.224.218:8000/auth2", {}).then((res) => {
      console.log(res.data.result);
      const token = res.data.result;
      if (token) {
        commit("setToken", token);
      }
      router.push("/");
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
