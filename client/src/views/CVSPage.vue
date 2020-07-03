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
        <tr v-for="(post, index) in allPosts()" v-bind:key="post._id">
          <td class="post-id">{{allPosts().length-index}}</td>
          <td class="post-title" @click="handleReadClick(post._id)">{{ post.c_title }}</td>
          <td class="post-author">익명</td>
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
import gql from "graphql-tag";

// import { getPosts } from "../graphql/post.js";

export default {
  name: "CVSPage",
  methods: {
    ...mapGetters(["allPosts"]),
    ...mapActions(["fetchPosts"]),
    handleWriteClick: () => router.push("/cvs/write"),
    handleReadClick: id => router.push({ name: "CVSReadPage", params: { id } })
  },
  apollo: {
    getPosts: {
      query: gql`
        query getPosts {
          getPosts {
            _id
            c_title
            c_content
            c_likes
            c_views
            createdAt
          }
        }
      `,
      skip() {
        return this.skipQuery;
      }
    }
  },
  async created() {
    console.log("created!");
    this.$apollo.queries.getPosts.skip = false;
    const posts = await this.$apollo.queries.getPosts.refetch();
    this.fetchPosts(posts.data.getPosts);
  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
