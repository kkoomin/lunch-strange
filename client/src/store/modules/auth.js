// import qs from "qs";
import router from "@/router";
// import cookies from "vue-cookies";
import axios from "axios";

const state = { token: "" };
const getters = { isLoggedIn: (state) => !!state.token };
const mutations = { setToken: (state, token) => (state.token = token) };
const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    location.pathname = "/";
  },
  login: ({ commit }) => {
    const kakao_app_key = process.env.VUE_APP_KAKAO_API_KEY;
    const redirect_uri = process.env.VUE_APP_SERVER_URL;
    const fullUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao_app_key}&redirect_uri=${redirect_uri}&response_type=code`;

    // const popup = window.open(fullUrl, "PopupWin", "width=500,height=600");
    // popup.close();

    window.open(fullUrl, "PopupWin", "width=500,height=600");

    // if (popup.location.href === "서버주소") {
    //   popup.close();
    // }

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
