<template>
  <article class="canteen">
    <div class="canteen-wrapper">
      <div class="canteen-front">
        <figure>
          <img src="@/assets/nolang-thumbnail.png" alt="canteen-image" />
        </figure>
        <div class="canteen-info">
          <h3 class="canteen-name">{{ place.name }}</h3>
          <span class="canteen-location">🏠{{ place.location }}</span>
          <span class="canteen-type">🍴{{ place.type }}</span>
          <span class="canteen-price">💰{{ place.price }}</span>
        </div>
      </div>

      <div class="canteen-back">
        <button class="small-btn" @click="handleMenuClick()">
          식단표 보기
        </button>
      </div>
    </div>

    <!-- 식단표 모달 -->
    <Modal v-if="isModalOpened" @toggleModal="handleMenuClick" @id="place.id" />
  </article>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "Canteen",
  props: ["place"],
  components: { Modal },
  data() {
    return { isModalOpened: false, modalStatus: "close" };
  },
  methods: {
    handleMenuClick() {
      this.isModalOpened = !this.isModalOpened;
    },
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
