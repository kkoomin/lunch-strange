<template>
  <section class="kakao-auth">로그인 중입니다...</section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "KakaoAuth",
  methods: { ...mapActions(["finalizeLogin"]) },
  created() {
    this.finalizeLogin();
  },
};
</script>

<style></style>
