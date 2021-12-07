<template>
  <div @click="goToDescription(id)">
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="imgSrc">
      </v-img>
      <v-card-title>{{ tourTittle }}</v-card-title>
      <v-card-subtitle class="pb-0">
        Days: {{ tourDaysAmount }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Total distance: {{ tourTotalDistance }}</div>

        <div>Price: {{ tourPrice }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <v-btn color="orange" text> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TourCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default:
        "https://extremeguide.pro/wp-content/uploads/2018/12/BXiM0Jy2AY8.jpg",
    },
    tourTittle: {
      type: String,
      default: "Trekking to Everest base Camp",
    },
    tourDaysAmount: {
      type: Number,
      default: 14,
    },
    tourTotalDistance: {
      type: Number,
      default: 90,
    },
    tourStartDate: {
      type: String,
      default: "2022.01.01",
    },
    tourPrice: {
      type: Number,
      default: 950,
    },
  },

  data() {
    return {};
  },

  methods: {
    goToDescription(id) {
      this.$router.push({ name: "description", params: { tour_id: id } });
    },
  },
};
</script>

<style lang="css" scoped></style>
