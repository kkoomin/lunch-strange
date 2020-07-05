<template>
  <section class="place-page">
    <div v-if="place" class="place-wrapper">
      <article v-if="place" class="place-container">
        <div
          v-if="place.p_img !== 'default.png'"
          class="place-image"
          :style="{ 'background-image': 'url(' + place.p_img + ')' }"
        ></div>

        <div class="place-name">
          <h1>{{ place.p_name }}</h1>
        </div>

        <div class="place-description">{{ place.p_description }}</div>

        <div v-if="place.menu" class="place-menu">
          <h2>🍴메뉴</h2>
          <div class="place-menu-wrapper">
            <div
              class="place-menu-item"
              v-for="menu in place.menu"
              :key="menu.m_name"
            >
              {{ menu.m_name }}
              {{ menu.m_price }}
            </div>
          </div>
        </div>
      </article>
      <aside class="place-info">
        <div class="place-address">{{ place.p_address }}</div>
        <div class="place-phone">{{ place.p_phone }}</div>
        <div v-if="place.tags" class="place-tags">
          <div v-for="tag in place.tags" :key="tag">
            {{ tag }}
          </div>
        </div>
        <div v-if="place">
          <Map :place="place" />
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
import Map from "../components/Map";
import { getPlace } from "../graphql/place.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PlacePage",
  components: { Map },
  data() {
    return {
      skipQuery: true,
    };
  },
  computed: {
    ...mapGetters(["place"]),
  },
  methods: {
    ...mapActions(["fetchPlace"]),
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
      },
    },
  },
  async created() {
    this.$apollo.queries.getPlace.skip = false;
    const place = await this.$apollo.queries.getPlace.refetch();
    this.fetchPlace(place.data.getPlace);
  },
  beforeDestroy() {
    this.fetchPlace(null);
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
#map {
  height: 300px;
  width: 300px;
}
</style>
