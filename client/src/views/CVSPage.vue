<template>
  <section class="cvs-page">
    <h1>편의점 조합</h1>
    <!-- 게시판 -->
    <table class="cvs-table">
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
          <th>좋아요</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in allPosts()" v-bind:key="post.id">
          <td class="post-id">{{ post.id }}</td>
          <td class="post-title" @click="handleReadClick(post.id)">
            {{ post.title }}
          </td>
          <td class="post-author">{{ post.author }}</td>
          <td class="post-createdAt">{{ post.createdAt }}</td>
          <td class="post-likes">{{ post.likes }}</td>
          <td class="post-views">{{ post.views }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 글쓰기 -->
    <button class="main-btn" @click="handleWriteClick">글쓰기</button>
  </section>
</template>

<script>
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "CVSPage",
  methods: {
    ...mapGetters(["allPosts"]),
    handleWriteClick: () => router.push("/cvs/write"),
    handleReadClick: (id) =>
      router.push({ name: "CVSReadPage", params: { id } }),
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
