import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import WeatherView from "@/views/WeatherView.vue";
import PlantView from "@/views/PlantView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/weather",
    name: "Weather",
    component: WeatherView,
  },
  {
    path: "/plant",
    name: "Plant",
    component: PlantView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
