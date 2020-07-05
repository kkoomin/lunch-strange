<template>
  <section class="cvs-page">
    <h1>편의점 조합</h1>
    <!-- 게시판 -->
    <table class="cvs-table">
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>날짜</th>
          <th>좋아요</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in allPosts()" v-bind:key="post._id">
          <td class="post-id">{{ allPosts().length - index }}</td>
          <td class="post-title" @click="handleReadClick(post._id)">
            {{ post.c_title }}
          </td>
          <td class="post-createdAt">{{ post.createdAt }}</td>
          <td class="post-likes">{{ post.c_likes }}</td>
          <td class="post-views">{{ post.c_views }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 글쓰기 -->
    <button class="main-btn" @click="handleWriteClick">글쓰기</button>
  </section>
</template>

<script>
import router from "@/router";
import { mapGetters, mapActions } from "vuex";
import { getPosts } from "../graphql/post.js";
import cookies from "vue-cookies";

export default {
  name: "CVSPage",
  methods: {
    ...mapGetters(["allPosts"]),
    ...mapActions(["fetchPosts"]),
    handleWriteClick: () => {
      if (cookies.get("u_id")) {
        router.push("/cvs/write");
      } else {
        alert("로그인이 필요한 기능입니다.");
      }
    },
    handleReadClick: (id) =>
      router.push({ name: "CVSReadPage", params: { id } }),
  },
  apollo: {
    getPosts: {
      query: getPosts,
      skip() {
        return this.skipQuery;
      },
    },
  },
  async created() {
    this.$apollo.queries.getPosts.skip = false;
    const posts = await this.$apollo.queries.getPosts.refetch();
    this.fetchPosts(posts.data.getPosts);
  },
  beforeDestroy() {
    this.fetchPosts([]);
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
