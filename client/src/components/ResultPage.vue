<template>
  <section class="result-page">
    <header>
      <h1>오늘은 여기 어때?</h1>
      <div class="filter-result">
        <span>| 8000원 | 5명 | 1km 이내 | 한식 |</span>
        <button class="small-btn">필터 재설정</button>
      </div>
    </header>
    <article
      class="restau-list"
      v-for="restau in restaurants"
      v-bind:key="restau.name"
    >
      <RestauResult :restau="restau" />
    </article>
    <Footer />
  </section>
</template>

<script>
import RestauResult from "./RestauResult";
import Footer from "../components/Footer.vue";

export default {
  name: "ResultPage",
  components: { RestauResult, Footer },
  data() {
    return {
      restaurants: [
        {
          name: "킹콩 생고기",
          menu: [
            { name: "제육쌈밥", price: "8,000원" },
            { name: "닭도리탕", price: "7,000원" },
            { name: "오징어볶음", price: "7,500원" },
          ],
        },
        {
          name: "소풍",
          menu: [
            { name: "라돈", price: "7,000원" },
            { name: "참치김밥", price: "3,500원" },
            { name: "김치볶음밥", price: "5,500원" },
          ],
        },
        {
          name: "양자강",
          menu: [
            { name: "짜장", price: "6,000원" },
            { name: "짬뽕", price: "7,000원" },
            { name: "간짜장", price: "7,000원" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
