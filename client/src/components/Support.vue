<template>
  <section class="support">
    <form class="support-form">
      <input type="email" required placeholder="문의하시는 분의 Email을 적어주세요." />
      <input type="text" required placeholder="제목" />
      <textarea cols="60" rows="10" required placeholder="문의내역"></textarea>
      <input class="file" type="file" accept="image/*" placeholder="파일 첨부" />
      <button class="main-btn">제출하기</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Support"
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.support-form {
  input {
    font-size: 0.9rem;
  }

  textarea {
    display: block;
    width: 30rem;
    font-size: 1.1rem;
    margin: 1rem auto;
    padding: 1rem 0.5rem;
    border: 2px solid #333333;
    border-radius: 5px;
  }
  .file {
    border: none;

    /* opacity: 0; */
  }
}
</style>
