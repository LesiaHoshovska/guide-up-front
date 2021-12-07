import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import programs from "./modules/programs";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    programs,
  },
});

export default store;
