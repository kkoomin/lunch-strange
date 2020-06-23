<template>
  <section class="result-page">
    <header>
      <h1>오늘은 여기 어때?</h1>
      <div class="filter-result">
        <span>| 8000원 | 1km 이내 | 한식 |</span>
        <router-link to="/">
          <button class="small-btn">필터 재설정</button>
        </router-link>
      </div>
    </header>

    <article class="result-container">
      <!-- List -->
      <div class="list">
        <RestauResult
          v-for="restau in $store.state.restaurants"
          v-bind:key="restau.name"
          :restau="restau"
        />
      </div>
      <!-- Map -->
      <div>
        <h1>여기는 맵이 들어올것</h1>
      </div>
    </article>

    <Footer />
  </section>
</template>

<script>
import RestauResult from "../components/RestauResult";
import Footer from "../components/Footer";

export default {
  name: "ResultPage",
  components: { RestauResult, Footer },
  methods: {},
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
