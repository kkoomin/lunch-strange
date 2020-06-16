<template>
  <div id="app" v-if="isInputEntered">
    <ResultPage />
  </div>
  <div id="app" v-else>
    <MainPage @handleClick="handleClick" />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import ResultPage from "./components/ResultPage.vue";

export default {
  name: "App",
  components: { MainPage, ResultPage },
  data() {
    return {
      isInputEntered: false,
    };
  },
  methods: {
    handleClick() {
      this.isInputEntered = !this.isInputEntered;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
