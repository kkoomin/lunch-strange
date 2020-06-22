<template>
  <section class="result-page">
    <header>
      <h1>오늘은 여기 어때?</h1>
      <div class="filter-result">
        <span>| 8000원 | 1km 이내 | 한식 |</span>
        <button class="small-btn" @click.prevent="$emit('handleClick')">필터 재설정</button>
      </div>
    </header>
    <article
      class="restau-list"
      v-for="restau in $store.state.restaurants"
      v-bind:key="restau.name"
    >
      <RestauResult :restau="restau" />
    </article>
    <Footer />
  </section>
</template>

<script>
import RestauResult from "../components/RestauResult";
import Footer from "../components/Footer";

export default {
  name: "ResultPage",
  components: { RestauResult, Footer }
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
