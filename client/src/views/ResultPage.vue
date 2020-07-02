<template>
  <section class="result-page">
    <header>
      <div class="filter-result">
        <!-- <span>| {{price}}원 | {{distance}}m 이내 | {{category}} | {{checked ? "점심부페 포함" : "점심부페 미포함"}} |</span> -->
        <router-link to="/">
          <button class="small-btn">필터 재설정</button>
        </router-link>
      </div>
    </header>

    <article class="result-container">
      <!-- List -->
      <div class="list">
        <placeResult v-for="place in allPlaces()" v-bind:key="place.p_name" :place="place" />
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
import { mapGetters, mapState } from "vuex";

export default {
  name: "ResultPage",
  components: { PlaceResult, Map },
  computed: { ...mapState(["price", "distance", "category", "checked"]) },
  methods: { ...mapGetters(["allPlaces"]) },
  created() {
    this.allPlaces();
    console.log(this.price);
  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
