import { createRouter, createWebHistory } from "vue-router";

import routes from "./modules/index";

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
