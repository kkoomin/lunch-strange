const state = {
  price: null,
  distance: null,
  category: null,
  checked: false,
  currentX: null,
  currentY: null,
};

const getters = {
  getCurrentX: (state) => state.currentX,
  getCurrentY: (state) => state.currentY,
};

const mutations = {
  setFilters: (state, filter) => {
    state.price = filter.price;
    state.distance = filter.distance;
    state.category = filter.category;
    state.checked = filter.checked;
  },
  setCoords: (state, coords) => {
    state.currentX = coords.longitude; // ex. 127.xxxx
    state.currentY = coords.latitude; // ex. 37.xxxx
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
