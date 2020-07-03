const state = {
  places: [],
  place: null,
};

const getters = {
  allPlaces: (state) => state.places,
  place: (state) => state.place,
};
const mutations = {
  setPlaces: (state, places) => (state.places = places),
  setPlace: (state, place) => (state.place = place),
};
const actions = {
  fetchFilteredPlaces: ({ commit }, places) => {
    commit("setPlaces", places);
  },
  fetchPlace: ({ commit }, place) => {
    commit("setPlace", place);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

/*
p_description: '트렌드에 맞춘 다양한 메뉴를 제공하는 카페형 치킨 전문점',
    p_img: '//img1.daumcdn.net/thumb/T800x0.q70/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F60CDFEE7311246CEBBA2D69845384F46',
    tags: [ '#긴급재난지원금', '#신한카드가맹점', '#카레뷔페' ],
    _id: 5efaa25b057410cb2cdef7f5,
    menu: [ [Object], [Object], [Object], [Object], [Object] ],
    p_id: '27365827',
    p_name: '깐부치킨 역삼디오빌점',
    p_address: '서울 강남구 언주로85길 7',
    p_phone: '02-561-9282',
    p_x: '127.042626324106',
    p_y: '37.5010291557741',
    */
