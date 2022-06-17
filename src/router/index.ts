import { createRouter, createWebHistory } from "vue-router";
import QuestionPage from "../views/QuestionPage.vue";
import Home from "../views/TopPage.vue";
import ConceptPage from "../views/ConceptPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/question", name: "Question", component: QuestionPage },
  { path: "/concept", name: "Concept", component: ConceptPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
