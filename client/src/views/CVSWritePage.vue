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
import router from "@/router";
import { createPost } from "../graphql/post.js";

export default {
  name: "CVSWritePage",
  data() {
    return {
      title: "",
      content: "",
      skipQuery: true,
    };
  },
  methods: {
    handleSubmit() {
      this.$apollo
        .mutate({
          mutation: createPost,
          variables: {
            title: this.title,
            content: this.content,
          },
        })
        .then(() => {
          alert("글 작성이 완료되었습니다!");
          router.push({ name: "CVSPage" });
        })
        .catch((error) => {
          console.error(error);
          alert("글 작성에 실패했습니다!");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
