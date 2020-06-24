<template>
  <section class="about-us-page">
    <Header />

    <article class="about-header">
      <img
        class="about-logo"
        alt="Lunch Strange Logo"
        src="../assets/logo3.png"
      />
      <h1>1,400만 개의 점심 메뉴를 보고 왔다</h1>
    </article>

    <article class="about-info">
      <div class="about-info__service-desc">
        <h3>About <span>Lunch Strange</span></h3>
        <p>
          Lunch Strange는 "오늘은 뭐 먹지?" 하는 일상의 고민을 해결하는
          서비스입니다. <br />서울 시내 주요 직장가의 높은 점심값이 언제나
          걱정인 직장인들, 학생들을 위해 합리적인 가격으로 점심을 해결할 수 있는
          식당들을 소개합니다.
        </p>
      </div>
      <div class="about-info__feature-desc">
        <h3>What We Offer</h3>
        <p>
          필터를 통해 검색하는 음식점 및 메뉴 확인
        </p>
        <p>
          오늘의 구내식당 메뉴 확인
        </p>
        <p>
          편의점에서 만들 수 있는 존맛 추천 조합
        </p>
      </div>
      <div class="about-info__contact-us">
        <h3>Contact Us</h3>
        <p>
          @kkoomin, @EomJaeWoong
        </p>
      </div>
    </article>

    <Footer />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "AboutUsPage",
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
