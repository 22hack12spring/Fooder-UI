import { createRouter, createWebHistory } from "vue-router";
import QuestionPage from "../views/QuestionPage.vue";
import Home from "../views/TopPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/question", name: "Question", component: QuestionPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
