<template>
  <div id="app">
    <ResultPage v-if="isInputEntered" @handleClick="handleClick" />
    <MainPage v-else @handleClick="handleClick" />
  </div>
</template>

<script>
import MainPage from "./pages/MainPage.vue";
import ResultPage from "./pages/ResultPage.vue";

export default {
  name: "App",
  components: { MainPage, ResultPage },
  data() {
    return {
      isInputEntered: ""
    };
  },
  methods: {
    handleClick() {
      this.isInputEntered = !this.isInputEntered;
    }
  }
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
