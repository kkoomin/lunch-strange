import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: {
      price: null,
      distance: null,
      category: null,
    },
    restaurants: [
      {
        name: "킹콩 생고기",
        menu: [
          { name: "제육쌈밥", price: "8,000원" },
          { name: "닭도리탕", price: "7,000원" },
          { name: "오징어볶음", price: "7,500원" },
        ],
      },
      {
        name: "소풍",
        menu: [
          { name: "라돈", price: "7,000원" },
          { name: "참치김밥", price: "3,500원" },
          { name: "김치볶음밥", price: "5,500원" },
        ],
      },
      {
        name: "양자강",
        menu: [
          { name: "짜장", price: "6,000원" },
          { name: "짬뽕", price: "7,000원" },
          { name: "간짜장", price: "7,000원" },
        ],
      },
      {
        name: "노랑통닭",
        menu: [{ name: "점심부페", price: "6,000원" }],
      },
    ],
  },
  mutations: {},
  actions: {},
});
