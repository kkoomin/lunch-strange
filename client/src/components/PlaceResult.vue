<template>
  <div class="place-result">
    <h2 class="place-name">
      {{ place.name }}
    </h2>
    <div class="place-menu">
      <ul v-for="menu in place.menu" v-bind:key="menu.name">
        <li>
          <span>{{ menu.name }}</span>
          <span>{{ menu.price }}</span>
        </li>
      </ul>
      <button class="small-btn" @click="handleDetailClick(place.id)">
        더보기
      </button>
      <!-- <button class="small-btn">길찾기</button> -->
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "PlaceResult",
  props: ["place"],
  methods: {
    handleDetailClick(id) {
      router.push({ name: "PlacePage", params: { id } });
    },
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
