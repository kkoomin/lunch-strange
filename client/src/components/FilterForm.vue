<template>
  <form class="filter-form">
    <h1>오늘은 뭘 먹을까?</h1>
    <input
      type="number"
      placeholder="💲 예산은 얼마까지?"
      step="500"
      min="0"
      max="1000000"
      required
      v-model="price"
    />

    <input
      type="number"
      step="50"
      min="0"
      max="1000"
      required
      placeholder="🚶🏻‍♂️ 어디까지 갈 수 있어? (ex. 500m → 500으로 입력)"
      v-model="distance"
    />

    <!-- Tagging multi select -->
    <div>
      <multiselect
        class="multiselect"
        v-model="category"
        placeholder="🍙 한식? 중식? 양식?"
        label="name"
        track-by="value"
        required
        :options="options"
        :multiple="true"
      ></multiselect>
      <!-- <pre class="language-json"><value>{{ category  }}</value></pre> -->
    </div>

    <label for="buffet-incl">
      <input
        class="checkbox"
        type="checkbox"
        name="buffet-incl"
        :checked="checked"
        @input="checked = $event.target.checked"
      />
      점심 부페 포함
    </label>

    <button class="main-btn" @click.prevent="handleClick">
      점심 메뉴 보여줘!
    </button>
    {{ getFilteredPlaces }}
    {{ price }}
    {{ distance }}
    {{ category }}
    {{ checked }}
  </form>
</template>

<script>
// import router from "@/router";
import Multiselect from "vue-multiselect";
import gql from "graphql-tag";

export default {
  name: "FilterForm",
  components: { Multiselect },
  data() {
    return {
      skipQuery: true,
      price: null,
      distance: null,
      category: [],
      checked: false,
      options: [
        { name: "한식", value: "한식" },
        { name: "양식", value: "양식" },
        { name: "중식", value: "중식" },
        { name: "분식", value: "분식" },
        { name: "일식", value: "일식" },
        { name: "기타", value: "기타" },
      ],
    };
  },
  apollo: {
    getFilteredPlaces: {
      query: gql`
        query SendFilter(
          $category: [String!]
          $price: String
          $distance: String
          $checked: Boolean
        ) {
          getFilteredPlaces(
            category: $category
            price: $price
            distance: $distance
            checked: $checked
          )
        }
      `,
      variables() {
        const category = [];
        this.category.forEach((el) => category.push(el.value));

        return {
          category: category,
          price: this.price,
          distance: this.distance,
          checked: this.checked,
        };
      },
      skip() {
        return this.skipQuery;
      },
    },
  },
  methods: {
    handleClick() {
      console.log("clicked!");
      this.$apollo.queries.getFilteredPlaces.skip = false;
      this.$apollo.queries.getFilteredPlaces.refetch();
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
@import "../scss/main.scss";
</style>
