<template>
  <div class="modal" :class="modalStatus" @click.self="$emit('toggleModal')">
    <div class="modal-content">
      <img class="menu-image" src="@/assets/nolang.jpg" alt="menu image" />
      <button class="modal-close-btn" @click="$emit('toggleModal')">❌</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["modalStatus"],
};
</script>

<style lang="scss">
@import "../scss/Modal.scss";
</style>
