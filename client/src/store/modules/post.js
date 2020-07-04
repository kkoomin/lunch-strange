const state = {
  posts: [],
  post: null,
};

const getters = {
  allPosts: (state) => state.posts.reverse(),
  post: (state) => state.post,
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  setPost: (state, post) => (state.post = post),
};
const actions = {
  fetchPosts: ({ commit }, posts) => {
    commit("setPosts", posts);
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
