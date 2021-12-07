<template>
  <div>
    <v-app-bar absolute color="white" elevate-on-scroll>
      <v-toolbar-title>Guide Up!!</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        color="primary"
        depressed
        elevation="2"
        outlined
        plain
        raised
        v-if="isAuthenticated()"
      >
        <router-link to="/edit/">Add Tour</router-link></v-btn
      >
      <v-btn color="primary" depressed elevation="2" outlined plain raised>
        <router-link to="/">Home</router-link></v-btn
      >
      <v-btn color="primary" depressed elevation="2" outlined plain raised>
        <router-link to="/about">About</router-link></v-btn
      >

      <v-btn v-if="isAuthenticated()" @click="onLogout">Log out </v-btn>
    </v-app-bar>

    <div class="container">
      <v-app>
        <router-view></router-view>
      </v-app>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",

  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },

  methods: {
    ...mapActions("auth", ["logout"]),
    onLogout() {
      this.logout();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  margin-top: 100px;
}
</style>
