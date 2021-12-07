import axios from "axios";

import apiEndPoints from "../../constants/apiEndPoints";

export default {
  namespaced: true,
  state: {
    toursList: [],
    editedObj: null,
    loading: false,
    error: null,
  },
  getters: {
    getToursList: (state) => state.toursList,
    getEditedObj: (state) => state.editedObj,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },
  mutations: {
    setToursList(state, list) {
      state.toursList = list;
    },
    setEditedObj(state, obj) {
      state.editedObj = obj;
    },
    deleteTour(state, tourId) {
      state.toursList = state.toursList.filter((item) => item._id !== tourId);
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    loadTours({ commit }, filterParams) {
      commit("setLoading", true);
      commit("setError", null);
      let paramsObj = null;
      if (filterParams) {
        paramsObj = { params: filterParams };
      }
      axios
        .get(apiEndPoints.tours.readList, paramsObj)
        .then((res) => res.data)
        .then((resData) => {
          if (resData.success) commit("setToursList", resData.data);
          else throw new Error("Failed!");
        })
        .catch((err) => {
          commit("setError", err);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
    createTour(
      { commit },
      {
        title,
        totalDistance,
        price,
        daysAmount,
        country,
        startDate,
        finishDate,
        description,
        activity,
        difficulties,
        priceIncluded,
        tourImgSrc,
      }
    ) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndPoints.tours.create, {
            title,
            totalDistance,
            price,
            daysAmount,
            country,
            startDate,
            finishDate,
            description,
            activity,
            difficulties,
            priceIncluded,
            tourImgSrc,
          })
          .then((res) => res.data)
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw resData.err;
          })
          .catch((err) => {
            console.log(err);
            commit("setError", err);
            reject(err);
          })
          .finally(() => commit("setLoading", false));
      });
    },

    updateTour(
      { commit, state },
      {
        title,
        totalDistance,
        price,
        daysAmount,
        country,
        startDate,
        finishDate,
        description,
        activity,
        difficulties,
        priceIncluded,
        tourImgSrc,
      }
    ) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .put(apiEndPoints.tours.update, {
            tourId: state.editedObj._id,
            title,
            totalDistance,
            price,
            daysAmount,
            country,
            startDate,
            finishDate,
            description,
            activity,
            difficulties,
            priceIncluded,
            tourImgSrc,
          })
          .then((res) => res.data)
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Failed!");
          })
          .catch((err) => {
            commit("setError", err);
            reject(err);
          })
          .finally(() => commit("setLoading", false));
      });
    },
    deleteTour({ commit }, tourId) {
      commit("setLoading", true);
      commit("setError", null);
      axios
        .delete(apiEndPoints.tours.delete, { data: { tourId } })
        .then((res) => res.data)
        .then((resData) => {
          if (resData.success) commit("deleteTour", tourId);
          else throw new Error("Failed!");
        })
        .catch((err) => {
          commit("setError", err);
        })
        .finally(() => commit("setLoading", false));
    },
    getTourById({ commit }, tourId) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .get(apiEndPoints.tours.getBankById(tourId))
          .then((res) => res.data)
          .then((resData) => {
            if (resData.success) {
              commit("setEditedObj", resData.data);
              resolve(resData.data);
            } else throw new Error("Failed!");
          })
          .catch((err) => {
            commit("setError", err);
            reject(err);
          })
          .finally(() => commit("setLoading", false));
      });
    },
  },
};
