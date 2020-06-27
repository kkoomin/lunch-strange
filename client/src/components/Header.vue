<template>
  <header class="header">
    <div class="logo">
      <router-link to="/"
        ><img class="logo" alt="Lunch Strange Logo" src="../assets/logo3.png"
      /></router-link>
    </div>

    <nav id="nav">
      <router-link to="/about">About Us</router-link>
      <router-link to="/">필터링 검색</router-link>
      <router-link to="/canteen">오늘의 메뉴</router-link>
      <router-link to="/cvs">편의점 조합</router-link>
      <router-link to="/user">로그인</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/main.scss";
</style>
