<template>
  <form class="filter-form">
    <input type="number" placeholder="💲 예산은 얼마까지?" step="500" min="0" max="1000000" />

    <input type="text" placeholder="🚶🏻‍♂️ 어디까지 갈 수 있어?" />

    <input type="text" placeholder="🍙 한식? 중식? 양식?" />
    <!-- <select>태그로 후에 변경 -->
    <select>
      <option value="korean">한식</option>
      <option value="western">양식</option>
      <option value="japanese">일식</option>
      <option value="chinese">중식</option>
      <option value="others">기타</option>
    </select>
    <button class="main-btn" @click.prevent="$emit('handleClick')">점심 메뉴 보여줘!</button>
  </form>
</template>

<script>
export default {
  name: "FilterForm"
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
