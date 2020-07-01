<template>
  <header class="header">
    <div class="logo">
      <router-link to="/"
        ><img class="logo" alt="Lunch Strange Logo" src="../assets/logo3.png"
      /></router-link>
    </div>

    <nav id="nav">
      <!-- <router-link to="/result">결과페이지</router-link> -->
      <router-link to="/about">About Us</router-link>
      <router-link to="/">필터링 검색</router-link>
      <router-link to="/canteen">오늘의 메뉴</router-link>
      <router-link to="/cvs">편의점 조합</router-link>
      <router-link to="/user" v-if="!isLoggedIn">로그인</router-link>
      <a v-else @click="logout">로그아웃</a>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/main.scss";
</style>
