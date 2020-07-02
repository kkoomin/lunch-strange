const state = {
  places: [
    {
      p_description:
        "고객의 건강을 생각하고, 한식의 품격을 높이는 최고의 한정식",
      p_img:
        "//img1.daumcdn.net/thumb/T800x0.q70/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F8B211276E8F14EEF99037D982F0FA60D",
      tags: [
        "#데이트코스",
        "#돌잔치",
        "#상견례",
        "#점심식사",
        "#정갈한느낌",
        "#친목모임",
        "#회식장소",
      ],
      _id: "5ef970fa6274a13c18e27092",
      menu: [[Object], [Object], [Object], [Object], [Object]],
      p_id: "20895830",
      p_name: "봉우리 역삼본점",
      p_address: "서울 강남구 논현로94길 25-3",
      p_phone: "02-564-8551",
      p_x: "127.038194204927",
      p_y: "37.5030993811252",
      __v: 0,
    },
    {
      p_description: "",
      p_img:
        "//img1.daumcdn.net/thumb/T800x0.q70/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F466B5E00B8404451AB689CF223CBCB48",
      tags: ["#긴급재난지원금", "#신한카드가맹점", "#친목모임", "#회식장소"],
      menu: [],
      p_id: "44032268",
      p_name: "육시리 역삼본점",
      p_address: "서울 강남구 논현로 420",
      p_phone: "02-556-6678",
      p_x: "127.03875243677922",
      p_y: "37.49784453232492",
      __v: 0,
    },
    {
      p_description: "",
      p_img:
        "//img1.daumcdn.net/thumb/T800x0.q70/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F11729D414E9645AC2F",
      tags: ["#긴급재난지원금", "#신한카드가맹점"],
      menu: [[Object], [Object], [Object], [Object], [Object]],
      p_id: "14569639",
      p_name: "이도곰탕 본점",
      p_address: "서울 강남구 논현로94길 29-5",
      p_phone: "02-569-0524",
      p_x: "127.038461247911",
      p_y: "37.5033732001773",
      __v: 0,
    },
    {
      p_description: "하우스웨딩홀",
      p_img:
        "//img1.daumcdn.net/thumb/T800x0.q70/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2FFF980EF875AC489988458A2CD640C685",
      tags: [
        "#긴급재난지원금",
        "#돌잔치",
        "#상견례",
        "#신한카드가맹점",
        "#회식장소",
      ],
      menu: [[Object], [Object], [Object], [Object], [Object], [Object]],
      p_id: "25155819",
      p_name: "파크루안 역삼점",
      p_address: "서울 강남구 논현로 430",
      p_phone: "02-562-5565",
      p_x: "127.03851667866734",
      p_y: "37.49899789750847",
      __v: 0,
    },
    {
      p_description: "정성으로 굽는 바게트 베이커리 전문점",
      p_img:
        "//img1.daumcdn.net/thumb/T800x0.q70/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2FD8966821D67F4C608854215D4791637C",
      tags: [],
      menu: [[Object], [Object], [Object], [Object], [Object], [Object]],
      p_id: "27480112",
      p_name: "바게트K",
      p_address: "서울 강남구 테헤란로34길 21-10",
      p_phone: "02-567-9501",
      p_x: "127.041445246197",
      p_y: "37.5002943551812",
      __v: 0,
    },
  ],
};

const getters = { allPlaces: (state) => state.places };
const mutations = { setPlaces: (state, places) => (state.places = places) };
const actions = {
  fetchFilteredPlaces: ({ commit }, places) => {
    console.log("fetchplaces!");
    commit("setPlaces", places);
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
