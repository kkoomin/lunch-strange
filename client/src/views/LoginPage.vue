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
export default {

  import axios from "axios";
  name: "LoginPage",
  methods: {
    kakaoLogin: () => {
      const kakao_app_key = process.env.VUE_APP_KAKAO_API_KEY;
      const redirect_uri = "http://70.12.224.218:8000/login";
      location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao_app_key}&redirect_uri=${redirect_uri}&response_type=code`;
    },
  },
};
</script>

<style lang="scss">
@import "../scss/LoginPage.scss";
</style>
