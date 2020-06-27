<template>
  <form class="filter-form">
    <input
      type="number"
      placeholder="💲 예산은 얼마까지?"
      step="500"
      min="0"
      max="1000000"
      v-model="price"
    />

    <input
      type="text"
      placeholder="🚶🏻‍♂️ 어디까지 갈 수 있어?"
      v-model="distance"
    />

    <!-- Tagging multi select -->
    <div>
      <multiselect
        v-model="category"
        placeholder="🍙 한식? 중식? 양식?"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
      ></multiselect>
      <!-- <pre class="language-json"><code>{{ category  }}</code></pre> -->
    </div>

    <label for="buffet-incl">
      점심 부페 포함
      <input
        class="checkbox"
        type="checkbox"
        name="buffet-incl"
        :checked="checked"
        @input="checked = $event.target.checked"
      />
    </label>

    <button class="main-btn" @click.prevent="handleClick">
      점심 메뉴 보여줘!
    </button>
    {{ price }}
    {{ distance }}
    {{ category }}
    {{ checked }}
  </form>
</template>

<script>
// import router from "@/router";
import Multiselect from "vue-multiselect";

export default {
  name: "FilterForm",
  components: { Multiselect },
  data() {
    return {
      price: null,
      distance: null,
      category: [],
      checked: false,
      options: [
        { name: "한식", code: "한식" },
        { name: "양식", code: "양식" },
        { name: "중식", code: "중식" },
        { name: "분식", code: "분식" },
        { name: "일식", code: "일식" },
        { name: "기타", code: "기타" },
      ],
    };
  },
  methods: {
    handleClick() {
      // router.push("/result");
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
@import "../scss/main.scss";
</style>
