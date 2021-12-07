import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import TourDescription from "../pages/TourDescription";

Vue.use(VueRouter);

const routes = [
  { path: "/login", name: "login", component: Login },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/", name: "home", component: Home },
  {
    path: "/description/:tour_id",
    name: "description",
    component: TourDescription,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
