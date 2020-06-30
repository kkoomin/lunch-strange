<template>
  <section class="login-page">
    <div class="login">
      <h1>Login</h1>
      <p class="login-welcome-message">
        🙌🏻 안녕하세요, Lunch Strange입니다. 🙌🏻
      </p>
      <img
        class="kakao-login-btn"
        src="@/assets/kakao_login_large_wide.png"
        alt="Kakao login button"
        @click="kakaoLogin"
      />
      <p class="login-info">
        Lunch Strange는 고객의 편의를 위해 카카오 로그인을 지원합니다.
      </p>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  methods: {
    kakaoLogin: () => {
      const kakao_app_key = process.env.VUE_APP_KAKAO_API_KEY;
      const redirect_uri = process.env.VUE_APP_SERVER_URL;
      const fullUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao_app_key}&redirect_uri=${redirect_uri}&response_type=code`;

      const popup = window.open(fullUrl, "PopupWin", "width=500,height=600");
      popup.close();

      axios
        .post("http://70.12.224.218:8000/auth2", {})
        .then((res) => console.log(res));
    },
  },
};
</script>
//
<style lang="scss">
@import "../scss/LoginPage.scss";
</style>
