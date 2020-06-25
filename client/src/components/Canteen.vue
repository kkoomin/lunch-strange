<template>
  <article class="canteen">
    <h3 class="canteen-name">{{ name }}</h3>
    <h5 class="canteen-price">{{ price }}</h5>
    <h5 class="canteen-location">{{ location }}</h5>
    <button class="small-btn">식단표 보기</button>
  </article>
</template>

<script>
export default {
  name: "Canteen",
  props: ["name", "price", "location"],
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
