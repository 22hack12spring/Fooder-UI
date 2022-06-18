import { createRouter, createWebHistory } from "vue-router";
import QuestionPage from "../views/QuestionPage.vue";
import Home from "../views/TopPage.vue";
import ResultPage from "../views/ResultPage.vue";
import ConceptPage from "../views/ConceptPage.vue";
import ShopNotFound from "../views/ShopNotFound.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/question", name: "Question", component: QuestionPage },
  { path: "/result", name: "Result", component: ResultPage },
  { path: "/concept", name: "Concept", component: ConceptPage },
  { path: "/notfound", name: "ShopNotFound", component: ShopNotFound },
  { path: "/:pathMatch(.*)*", name: "404", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
