<template>
  <form class="filter-form">
    <input
      type="number"
      placeholder="💲 예산은 얼마까지?"
      min="0"
      max="1000000"
    />

    <input type="text" placeholder="🚶🏻‍♂️ 어디까지 갈 수 있어?" />

    <input type="text" placeholder="🍙 한식? 중식? 양식?" />

    <input type="text" placeholder="😉 어떤 분위기의 음식점?" />

    <input type="text" placeholder="👬 몇 명이 가?" />

    <button class="main-btn" @click.prevent="$emit('handleClick')">
      점심 메뉴 보여줘!
    </button>
  </form>
</template>

<script>
export default {
  name: "FilterForm",
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
