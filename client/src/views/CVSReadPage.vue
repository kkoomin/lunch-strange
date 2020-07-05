<template>
  <section v-if="post" class="cvs-read-page">
    <article class="cvs-post">
      <!-- title -->
      <div class="cvs-post_title-container">
        <h2 v-if="!isUpdateOn" class="cvs-post_title">{{ post.c_title }}</h2>
        <input
          class="cvs-title-input"
          v-else
          v-model="title"
          type="text"
          placeholder="글 제목을 입력해주세요."
          required
        />
      </div>
      <!-- info bar -->
      <div class="cvs-post_info">
        <!-- <span>📝{{ post._id }}</span> -->
        <span>🧑🏻‍💻{{ post.author }} </span>
        <span>👍{{ post.c_likes }}</span>
        <span>👁{{ post.c_views }}</span>
        <span class="cvs-post_info-createdAt">⏱{{ post.createdAt }}</span>
      </div>
      <!-- content -->
      <div class="cvs-post_content-container">
        <p v-if="!isUpdateOn" class="cvs-post_content">{{ post.c_content }}</p>

        <textarea
          class="cvs-content-input"
          v-else
          v-model="content"
          rows="15"
          placeholder="글 내용을 입력해주세요."
          required
        />
      </div>
    </article>
    <div class="cvs-button-container">
      <div v-if="!isUpdateOn" class="cvs-main-buttons">
        <button class="small-btn" @click="handleListClick">목록</button>
        <button class="small-btn" @click="handleAddLikes(post._id)">👍</button>
        <button class="small-btn" @click="handleUpdateOn">수정</button>
        <button class="small-btn" @click="handleDelete(post._id)">삭제</button>
      </div>
      <div v-else class="cvs-update-buttons">
        <button class="main-btn" @click="handleUpdateSubmit(post._id)">
          수정 완료
        </button>
        <button class="small-btn" @click="handleListClick">목록</button>

        <button class="small-btn" @click="handleUpdateOn">수정 취소</button>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
import { addLikes, getPost, deletePost, updatePost } from "../graphql/post.js";
import { mapGetters, mapActions } from "vuex";
import cookies from "vue-cookies";

export default {
  name: "CVSReadPage",
  computed: { ...mapGetters(["post"]) },
  data() {
    return {
      isUpdateOn: false,
      skipQuery: true,
      title: "",
      content: "",
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
      },
    },
  },
  methods: {
    ...mapActions(["fetchPost"]),
    handleListClick() {
      router.push("/cvs");
    },
    handleUpdateOn() {
      this.isUpdateOn = !this.isUpdateOn;
      this.title = this.post.c_title;
      this.content = this.post.c_content;
    },
    handleUpdateSubmit(id) {
      this.$apollo
        .mutate({
          mutation: updatePost,
          variables: {
            id: id,
            title: this.title,
            content: this.content,
            author: cookies.get("u_id"),
          },
        })
        .then((data) => {
          if (data.data.updatePost.result) {
            alert("글 수정이 완료되었습니다!");
            router.push({ name: "CVSPage" });
          } else {
            alert("❗️게시글 수정에 실패했습니다.");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("글 작성에 실패했습니다!");
        });
    },
    handleDelete(id) {
      if (window.confirm("❗️해당 게시글을 삭제하시겠습니까?")) {
        this.$apollo
          .mutate({
            mutation: deletePost,
            variables: {
              id: id,
              author: cookies.get("u_id"),
            },
          })
          .then((data) => {
            console.log(data);
            if (data.data.deletePost.result) {
              alert("❗️게시글이 삭제되었습니다.");
              router.push("/cvs");
            } else {
              alert("❗️게시글 삭제에 실패했습니다.");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        alert("게시글 삭제가 취소되었습니다.");
      }
    },
    handleAddLikes(id) {
      this.$apollo
        .mutate({
          mutation: addLikes,
          variables: {
            id: id,
          },
        })
        .then((post) => {
          this.fetchPost(post.data.addLikes);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  async created() {
    this.$apollo.queries.getPost.skip = false;
    const post = await this.$apollo.queries.getPost.refetch();
    this.fetchPost(post.data.getPost);
  },
  beforeDestroy() {
    this.fetchPost(null);
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
