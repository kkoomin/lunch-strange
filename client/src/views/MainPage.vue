<template>
  <section class="main-page">
    <h1>오늘은 뭘 먹을까?</h1>
    <FilterForm />
  </section>
</template>

<script>
import FilterForm from "../components/FilterForm.vue";

export default {
  name: "MainPage",
  components: { FilterForm },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
