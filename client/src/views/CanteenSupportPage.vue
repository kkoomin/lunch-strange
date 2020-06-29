<template>
  <section class="canteen-support-page">
    <h1>구내식당 / 점심 부페 문의하기</h1>
    <p>
      구내식당 혹은 점심 부페 정보와 메뉴를 등록하고자 하는 분들은 아래 양식을
      작성하여 간략한 정보와 함께 문의주세요.
    </p>
    <Support />
    <button class="inform-btn" @click="handleClick">뒤로가기</button>
  </section>
</template>

<script>
import router from "@/router";
import Support from "../components/Support.vue";

export default {
  name: "CanteenSupportPage",
  components: { Support },
  methods: {
    handleClick() {
      router.push({ name: "CanteenPage" });
    },
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
