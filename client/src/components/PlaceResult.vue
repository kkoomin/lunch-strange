<template>
  <div class="place-result">
    <div class="place-header">
      <h3 class="place-name">{{ place.p_name }}</h3>
    </div>
    <div class="place-menu">
      <ul v-for="menu in place.menu" v-bind:key="menu.m_name">
        <li>
          <span>{{ menu.m_name }}</span>
          <span>{{ menu.m_price }}</span>
        </li>
      </ul>
      <button class="small-btn" @click="handleDetailClick(place.p_id)">더보기</button>
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
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
