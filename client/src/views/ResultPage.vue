<template>
  <section v-if="allPlaces()" class="result-page">
    <header>
      <div class="filter-result">
        <span>#{{ this.$store.state.filter.price }}원</span>
        <span>#{{ this.$store.state.filter.distance }}m 이내</span>
        <span>#{{ this.$store.state.filter.category.join(", ") }}</span>
        <span
          >#{{
            this.$store.state.filter.checked
              ? "점심부페 포함"
              : "점심부페 미포함"
          }}</span
        >
        <router-link to="/">
          <button class="small-btn">필터 재설정</button>
        </router-link>
      </div>
    </header>

    <article class="result-container">
      <!-- List -->
      <article class="list-container">
        <PlaceResult
          v-for="place in allPlaces()"
          v-bind:key="place.p_name"
          :place="place"
        />
      </article>
      <!-- Map -->
      <article class="map-container">
        <Map />
      </article>
    </article>
  </section>
</template>

<script>
import PlaceResult from "../components/PlaceResult";
import Map from "../components/Map";
import { mapGetters, mapState } from "vuex";

export default {
  name: "ResultPage",
  components: { PlaceResult, Map },
  computed: mapState(["price", "distance", "category", "checked"]),
  methods: { ...mapGetters(["allPlaces"]) },

  created() {
    this.allPlaces();
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
