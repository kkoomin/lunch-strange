const state = {
  posts: [
    {
      id: "1",
      title: "마크정식 아냐?",
      content: "근데 난 안머거봄",
      author: "익명쓰",
      createdAt: "2020.06.12",
      likes: 3,
      views: 12,
    },
    {
      id: "2",
      title: "불닭조합 추천",
      content: "진순이는 못먹음 주의",
      author: "냠냐미",
      createdAt: "2020.01.12",
      likes: 3,
      views: 42,
    },
  ],
};

const getters = {
  allPosts: (state) => state.posts,
};

const mutations = {};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
