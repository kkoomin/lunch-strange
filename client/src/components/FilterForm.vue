<template>
  <article class="filter-from-wrapper">
    <div class="form-container">
      <nav class="form-nav">
        <ul>
          <li>
            <button
              class="form-nav__button left"
              :class="[formInputField === 'price' ? 'active' : '']"
              @click="handleFieldChange('price')"
            >
              예산
            </button>
          </li>
          <li>
            <button
              class="form-nav__button"
              :class="[formInputField === 'distance' ? 'active' : '']"
              @click="handleFieldChange('distance')"
            >
              거리
            </button>
          </li>
          <li>
            <button
              class="form-nav__button right"
              :class="[formInputField === 'category' ? 'active' : '']"
              @click="handleFieldChange('category')"
            >
              분류
            </button>
          </li>
        </ul>
      </nav>
      <div class="form-input">
        <input
          v-if="formInputField === 'price'"
          type="number"
          placeholder="💲 예산은 얼마까지?"
          step="500"
          min="0"
          max="1000000"
          required
          v-model="price"
        />

        <input
          v-else-if="formInputField === 'distance'"
          type="number"
          step="50"
          min="0"
          max="1000"
          required
          placeholder="🚶🏻‍♂️ 어디까지 갈 수 있어? (ex. 500m → 500으로 입력)"
          v-model="distance"
        />
        <div v-else>
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
        </div>
      </div>
    </div>

    <div
      v-if="price || distance || category || checked"
      class="form-input-result-container"
    >
      <div class="form-input-result jagged-bottom">
        <span v-if="price">{{ price }}원 이내로, </span>
        <span v-if="distance">{{ distance }}m 안에서 </span>
        <span v-if="category"
          >{{ category.map((el) => el.value).join(", ") }} 중 하나로.</span
        >
        <span v-if="checked">
          점심 부페{{ checked ? " 갈 수도 있음" : "는 패스" }}
        </span>
      </div>

      <button class="main-btn filter-submit-btn" @click.prevent="handleSubmit">
        오늘은 여기서 먹는다!
      </button>
    </div>
  </article>
</template>

<script>
import router from "@/router";
import Multiselect from "vue-multiselect";
import gql from "graphql-tag";

export default {
  name: "FilterForm",
  components: { Multiselect },
  data() {
    return {
      isActive: true,
      formInputField: "price",
      skipQuery: true,
      price: null,
      distance: null,
      category: null,
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
    handleFieldChange(field) {
      this.formInputField = field;
    },
    handleSubmit() {
      console.log("clicked!");
      this.$apollo.queries.getFilteredPlaces.skip = false;
      this.$apollo.queries.getFilteredPlaces.refetch();
      router.push({ name: "ResultPage" });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
@import "../scss/main.scss";
</style>
