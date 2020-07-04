<template>
  <section class="main-page">
    <h1>🍱 오늘은 뭐 먹지?</h1>
    <FilterForm />

    <article class="about-info">
      <div class="about-info__service-desc">
        <h1>🔆1,400만 개의 점심 메뉴를 보고 왔다</h1>
        <p>
          Lunch Strange는 "오늘은 뭐 먹지?" 하는 일상의 고민을 해결하는
          서비스입니다.
          <br />서울 시내 주요 직장가의 높은 점심값이 언제나 걱정인 직장인들과
          학생들을 위해 합리적인 가격으로 점심을 해결할 수 있는 식당들을
          소개합니다.
        </p>
        <div class="main-page_img"></div>
      </div>
      <div class="about-info__feature-desc">
        <h1>📌 이런 서비스가 있어요</h1>
        <div class="offer-list">
          <div>
            <img
              class="about-info__feature-desc-img"
              src="@/assets/about-menu.png"
              alt="about menu image"
            />
            <p>필터를 통해 검색하는 음식점 및 메뉴 확인</p>
          </div>
          <div>
            <img
              class="about-info__feature-desc-img"
              src="@/assets/about-canteen.png"
              alt="about menu image"
            />
            <p>오늘의 구내식당 및 점심 부페 메뉴 확인</p>
          </div>
          <div>
            <img
              class="about-info__feature-desc-img"
              src="@/assets/about-cvs.png"
              alt="about menu image"
            />
            <p>편의점 점심 추천 조합</p>
          </div>
        </div>
      </div>
      <div class="about-info__contact-us">
        <div class="contact-info">
          <h1>🤙🏻 Contact Us</h1>
          <p>
            <a href="https://github.com/kkoomin">✨쿠민 @kkoomin</a>
            <a href="https://github.com/EomJaeWoong">✨웅이 @EomJaeWoong</a>
          </p>
        </div>

        <div class="contact-form">
          <Support />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import FilterForm from "../components/FilterForm.vue";
import Support from "../components/Support.vue";
import { mapActions } from "vuex";
import cookies from "vue-cookies";
import router from "@/router";

export default {
  name: "MainPage",
  components: { Support, FilterForm },
  methods: {
    ...mapActions(["setCoordsState", "finalizeLogin", "getUserInfo"]),
  },
  async created() {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    await navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setCoordsState({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      error,
      options
    );
    if (window.location.hash !== "") {
      this.finalizeLogin();
      const token = cookies.get("k_token");
      this.getUserInfo(token);
      router.push("/");
    }
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
