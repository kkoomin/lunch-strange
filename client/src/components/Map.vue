<template>
  <div id="map"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap(); // 지도 생성
      this.setMarkers(); // 마커 찍기
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_API_KEY}";
      document.head.appendChild(script);
    }
  },
  data() {
    return {
      map: null,
      marker: null,
    };
  },
  methods: {
    ...mapGetters(["allPlaces"]),
    initMap() {
      let container = document.getElementById("map");
      let options = {
        center: new kakao.maps.LatLng(37.501286, 127.039604), // 지도의 중심 좌표 y, x
        level: 3,
      };
      this.map = new kakao.maps.Map(container, options);
      // 지도를 생성합니다
    },
    setMarkers() {
      // 마커가 표시될 위치입니다
      // let markerPosition = new kakao.maps.LatLng(37.501286, 127.039604);

      let positions = this.allPlaces();
      console.log(positions);

      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        // var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(positions[i].p_y, positions[i].p_x), // 마커를 표시할 위치
          // title: positions[i].title // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          // image: markerImage // 마커 이미지
        });
      }
      marker.setMap(this.map);

      // 마커를 생성합니다
      // let marker = new kakao.maps.Marker({
      //   position: markerPosition
      // });
      // marker.setMap(this.map);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/Map.scss";
</style>
