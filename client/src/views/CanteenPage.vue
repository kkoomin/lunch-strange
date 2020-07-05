<template>
  <section class="canteen-page">
    <h1>구내식당 / 점심부페 메뉴</h1>

    <article class="canteen-list">
      <Canteen v-for="place in places" v-bind:key="place.id" :place="place" />
    </article>

    <button class="canteen-register-btn inform-btn" @click="handleSupportClick">
      구내식당 등록 문의
    </button>
  </section>
</template>

<script>
import router from "@/router";
import Canteen from "../components/Canteen.vue";

export default {
  name: "CanteenPage",
  components: { Canteen },
  methods: {
    handleSupportClick() {
      router.push({ name: "CanteenSupportPage" });
    },
  },
  data() {
    return {
      places: [
        {
          id: "1",
          name: "노랑통닭",
          price: "5,000원",
          location: "역삼역",
          type: "점심뷔페",
          img: "https://i.imgur.com/RtZYS5s.jpg",
          thumbnail: "https://i.imgur.com/VKwEXE4.png",
        },
        {
          id: "2",
          name: "멀티캠퍼스 20층",
          price: "6,000원",
          location: "역삼역",
          type: "구내식당",
          img: "https://i.imgur.com/hFOwYbx.jpg",
          thumbnail: "https://i.imgur.com/kIagFsb.jpg?1",
        },
        {
          id: "3",
          name: "멕시카나",
          price: "6,000원",
          location: "역삼역",
          type: "점심뷔페",
          img: "https://i.imgur.com/8dqWGYs.png",
          thumbnail: "https://i.imgur.com/GR9OgcA.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
