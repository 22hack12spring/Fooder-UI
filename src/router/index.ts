import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import QuestionPage from "../views/QuestionPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/question", name: "Question", component: QuestionPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
