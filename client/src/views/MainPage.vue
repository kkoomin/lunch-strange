<template>
  <section class="main-page">
    <Header />
    <FilterForm @handleClick="handleClick" />
    <Footer />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import FilterForm from "../components/FilterForm.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MainPage",
  components: { Header, FilterForm, Footer },
  methods: {
    handleClick(value) {
      this.$emit("handleClick", value);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
