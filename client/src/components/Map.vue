<template>
  <div id="map"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["place"],
  mounted() {
    if (window.kakao && window.kakao.maps) {
      if (this.place) {
        this.initMap(this.place.p_y * 1, this.place.p_x * 1);
      } else {
        this.initMap(this.getCurrentY(), this.getCurrentX()); // 지도 생성
        this.setMarkers(); // 마커 찍기
      }
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => {
        kakao.maps.load(this.initMap(this.getCurrentY(), this.getCurrentX()));
      };
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_API_KEY}";
      document.head.appendChild(script);
    }
  },
  updated() {
    if (this.place) {
      this.initMap(this.place.p_y * 1, this.place.p_x * 1);
    }
  },
  data() {
    return {
      map: null,
      marker: null,
    };
  },
  methods: {
    ...mapGetters(["allPlaces", "getCurrentX", "getCurrentY"]),
    initMap(y, x) {
      let container = document.getElementById("map");
      let options = {
        center: new kakao.maps.LatLng(y, x), // 지도의 중심 좌표 y, x
        level: 3,
      };
      this.map = new kakao.maps.Map(container, options); // 지도 생성

      let markerPosition = new kakao.maps.LatLng(y, x);

      let imageSrc =
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        imageSize = new kakao.maps.Size(34, 39),
        imageOption = { offset: new kakao.maps.Point(7, 39) };

      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      let marker = new kakao.maps.Marker({
        map: this.map,
        position: markerPosition,
        image: markerImage,
      });
      marker.setMap(this.map);
    },
    setMarkers() {
      let positions = this.allPlaces();

      for (var i = 0; i < positions.length; i++) {
        var marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(positions[i].p_y, positions[i].p_x),
          title: positions[i].p_name,
        });
      }
      marker.setMap(this.map); // 마커 생성
    },
  },
};
</script>

<style lang="scss">
@import "../scss/Map.scss";
</style>
