const state = {
  posts: [],
  post: null,
};

const getters = {
  allPosts: (state) => state.posts,
  post: (state) => state.post,
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  setPost: (state, post) => (state.post = post),
};
const actions = {
  fetchPosts: ({ commit }, posts) => {
    const reversedPosts = posts.reverse();
    commit("setPosts", reversedPosts);
  },
  fetchPost: ({ commit }, post) => {
    commit("setPost", post);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
