<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import cookies from "vue-cookies";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: { Header, Footer },
  methods: {
    ...mapActions(["keepLogin"]),
  },
  created() {
    // 새로고침시 로그인 유지
    if (cookies.get("u_id") && cookies.get("k_token")) {
      const token = cookies.get("k_token");
      this.keepLogin(token);
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
