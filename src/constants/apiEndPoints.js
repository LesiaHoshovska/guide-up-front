export default {
  tours: {
    readList: `${process.env.VUE_APP_API_URL}/tours`,
    create: `${process.env.VUE_APP_API_URL}/tours/add`,
    update: `${process.env.VUE_APP_API_URL}/tours/update`,
    delete: `${process.env.VUE_APP_API_URL}/tours`,
    getTourById: (tourId) => `${process.env.VUE_APP_API_URL}/tours/${tourId}`,
  },
  user: {
    signup: `${process.env.VUE_APP_API_URL}/users/signup`,
    login: `${process.env.VUE_APP_API_URL}/users/login`,
  },
};
