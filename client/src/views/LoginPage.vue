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
        @click="login"
      />
      <p class="login-info">
        Lunch Strange는 고객의 편의를 위해 카카오 로그인을 지원합니다.
      </p>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginPage",
  methods: { ...mapActions(["login"]) },
};
</script>
//
<style lang="scss">
@import "../scss/LoginPage.scss";
</style>
