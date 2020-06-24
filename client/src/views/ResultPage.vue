<template>
  <section class="result-page">
    <header>
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
        <Map />
      </div>
    </article>
  </section>
</template>

<script>
import RestauResult from "../components/RestauResult";
import Map from "../components/Map";

export default {
  name: "ResultPage",
  components: { RestauResult, Map },
  methods: {},
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
