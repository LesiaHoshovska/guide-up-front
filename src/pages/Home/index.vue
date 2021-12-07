<template>
  <div>
    <div>
      <Carousel />
    </div>
    <div>
      <h1>Our Programs</h1>
      <div v-if="isLoading">Loading...</div>
      <div v-if="hasError">Error!!!</div>
      <div v-if="!isLoading && !hasError">
        <div>
          <label>
            Location
            <input type="text" v-model.lazy="searchLocation" />
          </label>
        </div>
      </div>
      <div class="content">
        <TourCard
          v-for="tour in getToursList"
          :key="tour.tourId"
          :id="tour.tourId"
          :tourTittle="tour.title"
          :tourDaysAmount="tour.daysAmount"
          :tourTotalDistance="tour.totalDistance"
          :tourPrice="tour.price"
          :tourStartDate="tour.startDate"
          :imgSrc="tour.tourImgSrc"
          class="tourcard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from "../../components/TourCard/index.vue";
import Carousel from "../../components/Carousel/index.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    TourCard,
    Carousel,
  },
  data() {
    return {
      searchLocation: null,
    };
  },
  computed: {
    ...mapGetters("programs", ["getToursList", "isLoading", "hasError"]),
  },

  watch: {
    searchLocation(newValue) {
      if (newValue)
        this.loadTours({
          filter_property: "title",
          filter_value: newValue,
        });
      else this.loadTours();
    },
  },

  methods: {
    ...mapActions("programs", ["loadTours"]),
  },
  mounted() {
    this.loadTours();
  },
};
</script>

<style>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-self: center;
  justify-content: center;
}
.tourcard {
  padding: 10px;
}
</style>
