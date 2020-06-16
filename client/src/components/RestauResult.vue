<template>
  <div class="restau-result">
    <h2 class="restau-name">
      {{ restau.name }}
    </h2>
    <div class="restau-menu">
      <ul v-for="menu in restau.menu" v-bind:key="menu.name">
        <li>
          <span>{{ menu.name }}</span>
          <span>{{ menu.price }}</span>
        </li>
      </ul>
      <button class="small-btn">메뉴 더보기</button>
      <button class="small-btn">길찾기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestauResult",
  props: ["restau"],
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
