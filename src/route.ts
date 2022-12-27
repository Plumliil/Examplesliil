import { createRouter, createWebHistory } from "vue-router";
import Blog from "./views/Blog.vue";

const routerHistory = createWebHistory();

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/blog/:name",
      name: "blog",
      component: () => import("./views/Blog.vue"),
    },
  ],
});

export default routes;
