<template>
  <form class="filter-form">
    <input
      type="number"
      placeholder="💲 예산은 얼마까지?"
      step="500"
      min="0"
      max="1000000"
    />

    <input type="text" placeholder="🚶🏻‍♂️ 어디까지 갈 수 있어?" />

    <!-- Tagging multi select -->
    <div>
      <multiselect
        v-model="value"
        tag-placeholder="Add this as new tag"
        placeholder="🍙 한식? 중식? 양식?"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag"
      ></multiselect>
      <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
    </div>

    <label for="buffet-incl">
      점심 부페 포함
      <input class="checkbox" type="checkbox" name="buffet-incl" id />
    </label>

    <button class="main-btn" @click.prevent="handleClick">
      점심 메뉴 보여줘!
      <!-- router.push('result') -->
    </button>
  </form>
</template>

<script>
import router from "@/router";
import Multiselect from "vue-multiselect";

export default {
  name: "FilterForm",
  components: { Multiselect },
  data() {
    return {
      value: [],
      options: [
        { name: "한식", code: "korean" },
        { name: "양식", code: "western" },
        { name: "중식", code: "chinese" },
        { name: "분식", code: "snack" },
        { name: "일식", code: "japanese" },
        { name: "기타", code: "others" },
      ],
    };
  },
  methods: {
    // addTag(newTag) {
    //   const tag = {
    //     name: newTag,
    //     code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
    //   };
    //   console.log(newTag);
    //   this.options.push(tag);
    //   this.value.push(tag);
    // },
    handleClick: () => {
      router.push("/result");
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
@import "../scss/main.scss";
</style>
