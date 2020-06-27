<template>
  <section class="canteen-page">
    <h1>구내식당 / 점심뷔페 메뉴</h1>

    <article class="canteen-list">
      <Canteen v-for="place in places" v-bind:key="place.id" :place="place" />
    </article>

    <button class="canteen-register-btn">구내식당 등록 문의</button>
  </section>
</template>

<script>
import Canteen from "../components/Canteen.vue";

export default {
  name: "CanteenPage",
  components: { Canteen },
  data() {
    return {
      places: [
        {
          id: "1",
          name: "노랑통닭",
          price: "5,000원",
          location: "역삼역",
          type: "점심뷔페",
        },
        {
          id: "2",
          name: "노랑통닭",
          price: "5,000원",
          location: "역삼역",
          type: "점심뷔페",
        },
        {
          id: "3",
          name: "노랑통닭",
          price: "5,000원",
          location: "역삼역",
          type: "점심뷔페",
        },
        {
          id: "4",
          name: "노랑통닭",
          price: "5,000원",
          location: "역삼역",
          type: "점심뷔페",
        },
        {
          id: "5",
          name: "노랑통닭",
          price: "5,000원",
          location: "역삼역",
          type: "점심뷔페",
        },
        // {
        //   id: "6",
        //   name: "노랑통닭",
        //   price: "5,000원",
        //   location: "역삼역",
        //   type: "점심뷔페",
        // },
        // {
        //   id: "7",
        //   name: "노랑통닭",
        //   price: "5,000원",
        //   location: "역삼역",
        //   type: "점심뷔페",
        // },
        // {
        //   id: "8",
        //   name: "노랑통닭",
        //   price: "5,000원",
        //   location: "역삼역",
        //   type: "점심뷔페",
        // },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
