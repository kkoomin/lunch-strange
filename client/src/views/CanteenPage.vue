<template>
  <section class="canteen-page">
    <Header />

    <h1>구내식당 메뉴</h1>

    <p>
      구내식당 데이터 출력... 표로... 식단표 사진으로 올리기...'ㅅ'...에잇 기찬
    </p>

    <button class="main-btn">구내식당 등록하기</button>

    <Footer />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "CanteenPage",
  components: { Header, Footer },
};
</script>

<style></style>
