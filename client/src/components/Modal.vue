<template>
  <div class="modal" @click.self="$emit('toggleModal')">
    <div class="modal-content">
      <img class="menu-image" :src="img" alt="menu image" />
      <button class="modal-close-btn" @click="$emit('toggleModal')">❌</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["img"],
};
</script>

<style lang="scss">
@import "../scss/Modal.scss";
</style>
