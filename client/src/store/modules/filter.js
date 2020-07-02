const state = {
  price: null,
  distance: null,
  category: null,
  checked: false,
};

const getters = {};

const mutations = {
  setFilters: (state, filter) => {
    state.price = filter.price;
    state.distance = filter.distance;
    state.category = filter.category;
    state.checked = filter.checked;
  },
};
const actions = {
  getFilterValues({ commit }, filter) {
    commit("setFilters", filter);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
