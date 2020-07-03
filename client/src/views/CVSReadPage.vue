<template>
  <section class="cvs-read-page">
    <article v-if="post" class="cvs-post">
      <h2 class="cvs-post_title">{{ post.c_title }}</h2>
      <div class="cvs-post_info">
        <span>📝{{ post._id }}</span>
        <span>🧑🏻‍💻{{ post.author }}</span>
        <span>👍{{ post.c_likes }}</span>
        <span>👁{{ post.c_views }}</span>
        <span class="cvs-post_info-createdAt">⏱{{ post.createdAt }}</span>
      </div>
      <p class="cvs-post_content">{{ post.c_content }}</p>
    </article>
    <button class="small-btn" @click="handleListClick">목록</button>
    <button class="small-btn" @click="handleAddLikes(post._id)">👍</button>
    <button class="small-btn">수정</button>
    <button class="small-btn" @click="handleDelete(post._id)">삭제</button>
  </section>
</template>

<script>
import router from "@/router";
import { addLikes, getPost, deletePost } from "../graphql/post.js";
// import gql from "graphql-tag";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CVSReadPage",
  computed: { ...mapGetters(["post"]) },
  data() {
    return {
      skipQuery: true
    };
  },
  apollo: {
    getPost: {
      query: getPost,
      variables() {
        const id = location.pathname.split("/")[2];
        return { id };
      },
      skip() {
        return this.skipQuery;
      }
    }
  },
  methods: {
    ...mapActions(["fetchPost"]),
    handleListClick() {
      router.push("/cvs");
    },
    handleDelete(id) {
      this.$apollo
        .mutate({
          mutation: deletePost,
          variables: {
            id: id
          }
        })
        .then(data => {
          console.log(data);
          if (data.data.deletePost.result) {
            alert("❗️게시글이 삭제되었습니다.");
            router.push("/cvs");
          } else {
            alert("❗️게시글을 삭제하는 도중 오류가 발생했습니다.");
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleAddLikes(id) {
      this.$apollo
        .mutate({
          mutation: addLikes,
          variables: {
            id: id
          }
        })
        .then(post => {
          this.fetchPost(post.data.addLikes);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  async created() {
    console.log(location.pathname.split("/")[2]);

    this.$apollo.queries.getPost.skip = false;
    const post = await this.$apollo.queries.getPost.refetch();
    this.fetchPost(post.data.getPost);
  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
