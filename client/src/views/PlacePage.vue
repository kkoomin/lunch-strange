<template>
  <section class="place-page">
    <article v-if="place" class="place-info">
      가게 상세 페이지 (가게명, 주소 등)
      {{place.p_name}}
      {{place.p_description}}
      {{place.p_menu}}
      {{place.p_tags}}
      <!-- <Map /> -->
    </article>
  </section>
</template>

<script>
// import Map from "../components/Map";
import { getPlace } from "../graphql/place.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PlacePage",
  // components: { Map },
  data() {
    return {
      skipQuery: true
    };
  },
  computed: {
    ...mapGetters(["place"])
  },
  methods: {
    ...mapActions(["fetchPlace"])
  },
  apollo: {
    getPlace: {
      query: getPlace,
      variables() {
        const id = location.pathname.split("/")[2];
        return { id };
      },
      skip() {
        return this.skipQuery;
      }
    }
  },
  async created() {
    this.$apollo.queries.getPlace.skip = false;
    const place = await this.$apollo.queries.getPlace.refetch();
    this.fetchPlace(place.data.getPlace);
    console.log(this.place);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
#map {
  height: 400px;
  width: 700px;
}
</style>
