<template>
  <section class="cvs-page">
    <h1>편의점 조합</h1>
    <!-- 게시판 -->
    <table class="cvs-table">
      <thead>
        <tr>
          <th class="post-num">글번호</th>
          <th class="post-title">제목</th>
          <th class="post-author">작성자</th>
          <th class="post-likes">좋아요</th>
          <th class="post-views">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>마크정식아냐</td>
          <td>익명</td>
          <td>1</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
    <!-- 글쓰기 -->
    <button class="main-btn">글쓰기</button>
  </section>
</template>

<script>
export default {
  name: "CVSPage",
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
