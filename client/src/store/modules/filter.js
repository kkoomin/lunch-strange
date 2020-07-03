const state = {
  price: null,
  distance: null,
  category: null,
  checked: false,
  currentX: null,
  currentY: null,
};

const getters = {};

const mutations = {
  setFilters: (state, filter) => {
    state.price = filter.price;
    state.distance = filter.distance;
    state.category = filter.category;
    state.checked = filter.checked;
  },
  setCoords: (state, coords) => {
    state.currentX = coords.longitude;
    state.currentY = coords.latitude;
  },
};
const actions = {
  getFilterValues({ commit }, filter) {
    commit("setFilters", filter);
  },
  setCoordsState({ commit }, coords) {
    commit("setCoords", coords);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
