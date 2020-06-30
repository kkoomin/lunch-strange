<template>
  <section class="main-page">
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
