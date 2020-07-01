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
        <placeResult
          v-for="place in allPlaces()"
          v-bind:key="place.name"
          :place="place"
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
import PlaceResult from "../components/PlaceResult";
import Map from "../components/Map";
import { mapGetters } from "vuex";

export default {
  name: "ResultPage",
  components: { PlaceResult, Map },
  methods: { ...mapGetters(["allPlaces"]) },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
