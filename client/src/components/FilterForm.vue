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
        <div v-if="formInputField === 'price'">
          <input
            class="line-input"
            type="number"
            placeholder="💲 점심 가격은 얼마까지?"
            step="500"
            min="0"
            max="1000000"
            required
            v-model="price"
          />
          <span class="price-tag" @click="handleTagPrice('6000')"
            >#6,000원</span
          >
          <span class="price-tag" @click="handleTagPrice('8000')"
            >#8,000원</span
          >
          <span class="price-tag" @click="handleTagPrice('10000')"
            >#10,000원</span
          >
          <span class="price-tag" @click="handleTagPrice('12000')"
            >#12,000원</span
          >
        </div>

        <div v-else-if="formInputField === 'distance'">
          <input
            class="line-input"
            type="number"
            step="50"
            min="0"
            max="5000"
            required
            placeholder="🚶🏻‍♂️ 어디까지 갈 수 있어? (ex. 500m → 500으로 입력)"
            v-model="distance"
          />

          <span class="distance-tag" @click="handleTagDistance('300')"
            >#완전 코앞</span
          >
          <span class="distance-tag" @click="handleTagDistance('500')"
            >#슬슬 걸어서 5분 거리</span
          >
          <span class="distance-tag" @click="handleTagDistance('750')"
            >#10분이면 갈 수 있지</span
          >
          <span class="distance-tag" @click="handleTagDistance('1000')"
            >#걸어서 15분 정도 산책</span
          >
        </div>

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

          <button
            class="small-btn buffet-incl-btn"
            :class="checked ? 'included' : null"
            @click="handleBuffetIncl"
          >
            {{ checked ? "✔️" : "➖" }}점심 부페 포함
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="price || distance || category"
      class="form-input-result-container"
    >
      <div class="form-input-result jagged-bottom">
        <span v-if="price"
          >{{ price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }}원 이내로,</span
        >
        <span v-if="distance">{{ distance }}m 안에서,</span>
        <span v-if="category"
          >{{ category.map((el) => el.value).join(", ") }} 중 하나로.</span
        >
        <span v-if="category"
          >점심 부페{{ checked ? " 갈 수도 있음" : "는 패스" }}</span
        >
      </div>

      <button class="main-btn filter-submit-btn" @click.prevent="handleSubmit">
        오늘은 여기서 먹는다!
      </button>
    </div>

    <!-- 로딩 안내 -->
    <!-- <div class="modal" @click.self="$emit('toggleModal')">
      <div class="modal-content">
        <img class="menu-image" :src="img" alt="menu image" />
      </div>
    </div>-->
  </article>
</template>

<script>
import router from "@/router";
import Multiselect from "vue-multiselect";
import { getFilteredPlaces } from "../graphql/getFilteredPlaces.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FilterForm",
  components: { Multiselect },
  data() {
    return {
      isActive: true,
      formInputField: "price",
      getFilteredPlaces: null,
      skipQuery: true,
      // filter input
      price: null,
      distance: null,
      category: null,
      checked: false,
      //
      ...mapGetters(["getCurrentX", "getCurrentY"]),
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
      query: getFilteredPlaces,
      variables() {
        const category = [];
        this.category.forEach((el) => category.push(el.value));

        return {
          category: category,
          price: this.price,
          distance: this.distance,
          checked: this.checked,
          currentX: this.getCurrentX().toString(),
          currentY: this.getCurrentY().toString(),
        };
      },
      skip() {
        return this.skipQuery;
      },
    },
  },

  methods: {
    ...mapActions(["fetchFilteredPlaces", "getFilterValues"]),
    handleFieldChange(field) {
      this.formInputField = field;
    },
    async handleSubmit() {
      if (this.price && this.distance && this.category) {
        // Filter input 선택값 state 저장
        this.getFilterValues({
          price: this.price,
          distance: this.distance,
          category: this.category.map((el) => el.value),
          checked: this.checked,
        });

        // graphql query 실행
        this.$apollo.queries.getFilteredPlaces.skip = false;
        const places = await this.$apollo.queries.getFilteredPlaces.refetch();
        console.log(places);

        // graphql query return값 state 저장
        this.fetchFilteredPlaces(places.data.getFilteredPlaces);

        // result 페이지로 이동
        router.push({ name: "ResultPage" });
      } else {
        alert("⚠️ 필터를 마저 설정해주세요.");
      }
    },
    handleBuffetIncl() {
      this.checked = !this.checked;
    },
    handleTagPrice(price) {
      this.price = price;
    },
    handleTagDistance(distance) {
      this.distance = distance;
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
@import "../scss/main.scss";
</style>
