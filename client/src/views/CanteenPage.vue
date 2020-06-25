<template>
  <section class="canteen-page">
    <h1>구내식당 메뉴</h1>

    <article class="canteen-list">
      <Canteen
        v-for="place in places"
        v-bind:key="place.id"
        :name="place.name"
        :price="place.price"
        :location="place.location"
      />
    </article>

    <button class="main-btn">구내식당 등록하기</button>
  </section>
</template>

<script>
import Canteen from "../components/Canteen.vue";

export default {
  name: "CanteenPage",
  components: { Canteen },
  data() {
    return {
      places: [
        { id: "1", name: "GS타워 아워홈", price: "5,500원", location: "역삼" },
        { id: "2", name: "GS타워 아워홈", price: "5,500원", location: "역삼" },
        { id: "3", name: "GS타워 아워홈", price: "5,500원", location: "역삼" },
        { id: "4", name: "GS타워 아워홈", price: "5,500원", location: "역삼" },
        { id: "5", name: "GS타워 아워홈", price: "5,500원", location: "역삼" },
        { id: "6", name: "GS타워 아워홈", price: "5,500원", location: "역삼" },
        { id: "7", name: "GS타워 아워홈", price: "5,500원", location: "역삼" },
        { id: "8", name: "GS타워 아워홈", price: "5,500원", location: "역삼" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
