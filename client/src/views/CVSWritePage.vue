<template>
  <section class="cvs-write-page">
    <h3>편의점 조합 추천 글쓰기</h3>
    <form @submit.prevent="handleSubmit">
      <input
        v-model="title"
        type="text"
        placeholder="글 제목을 입력해주세요."
        required
      />
      <textarea
        v-model="content"
        rows="15"
        placeholder="글 내용을 입력해주세요."
        required
      />
      <button class="main-btn">✏️ 작성완료</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "CVSWritePage",
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.title + this.content);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
