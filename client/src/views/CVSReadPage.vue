<template>
  <section class="cvs-read-page">
    <article class="cvs-post">
      <h2 class="cvs-post_title">{{ post.title }}</h2>
      <div class="cvs-post_info">
        <span>📝{{ post.id }}</span>
        <span>🧑🏻‍💻{{ post.author }}</span>
        <span>👍{{ post.likes }}</span>
        <span>👁{{ post.views }}</span>
        <span class="cvs-post_info-createdAt">⏱{{ post.createdAt }}</span>
      </div>
      <p class="cvs-post_content">{{ post.content }}</p>
    </article>
    <button class="small-btn">👍</button>
    <button class="small-btn">수정</button>
    <button class="small-btn">삭제</button>
  </section>
</template>

<script>
export default {
  name: "CVSReadPage",
  data() {
    return {
      post: null,
    };
  },
  created() {
    const id = location.href.split("/").reverse()[0];
    this.post = this.$store.state.post.posts.filter(
      (post) => post.id === id
    )[0];
    // 이 id 값으로 db에서 post 정보 가져오기 ;(
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
