<template>
  <section class="place-page">
    <article class="place-info">
      가게 상세 페이지 (가게명, 주소 등)
      <Map />
    </article>
  </section>
</template>

<script>
import Map from "../components/Map";

export default {
  name: "PlacePage",
  components: { Map },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
#map {
  height: 400px;
  width: 700px;
}
</style>
