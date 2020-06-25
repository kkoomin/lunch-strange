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
      <input
        v-model="password"
        type="password"
        placeholder="비밀번호"
        maxlength="8"
        required
      />
      <button class="main-btn">글쓰기</button>
    </form>
    {{ title }}
  </section>
</template>

<script>
export default {
  name: "CVSWritePage",
  data() {
    return {
      title: "",
      content: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.title + this.content + this.password);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
