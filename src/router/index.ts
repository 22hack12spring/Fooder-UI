import { createRouter, createWebHistory } from "vue-router";
import QuestionPage from "../views/QuestionPage.vue";
import Home from "../views/TopPage.vue";
import ResultPage from "../views/ResultPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/question", name: "Question", component: QuestionPage },
  { path: "/result", name: "Result", component: ResultPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
