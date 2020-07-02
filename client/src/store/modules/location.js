const state = {
  currentLocation: [],
};

const getters = {};

const mutations = {
  setCurrentLocation: (state, location) => (state.currentLocation = location),
};
const actions = {
  handleCurrentLocation: ({ commit }, location) =>
    commit("setCurrentLocation", location),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
