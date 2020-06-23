<template>
  <header class="header">
    <div class="logo">
      <img class="logo" alt="Lunch Strange Logo" src="../assets/logo3.png" />
    </div>

    <nav id="nav">
      <router-link to="/">About Us</router-link> |
      <router-link to="/result">오늘의 메뉴</router-link> |
      <router-link to="/result">편의점 조합</router-link> |
      <router-link to="/result">로그인</router-link>
    </nav>
    <!-- <nav class="nav">
      <ul>
        <li>About Us</li>
        <li>오늘의 메뉴</li>
        <li>편의점 조합</li>
        <li>로그인</li>
      </ul>
    </nav> -->
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
