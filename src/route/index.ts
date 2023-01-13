import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/blog/:name",
      name: "blog",
      component: () => import("../views/Blog.vue"),
    },
    {
      path: "/tool/:name",
      name: "tools",
      component: () => import("../views/Tools.vue"),
    },
    {
      path: "/test/:name",
      name: "test",
      component: () => import("../views/Test.vue"),
    },
    {
      path: "/demo/:name",
      name: "demo",
      component: () => import("../views/Demo.vue"),
    },
  ],
});

export default routes;
