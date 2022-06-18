import {
  Configuration,
  GourmetStartRequest,
  GourmetApi,
  GourmetAnswerRequest,
} from "./generated";
import { store } from "../store";

const baseUrl = import.meta.env.DEV
  ? "http://localhost:8080/api/v1"
  : "https://22hack12spring.trap.show/fooder-backend/api/v1";

const config = new Configuration({ basePath: baseUrl });

const gourmetApi: GourmetApi = new GourmetApi(config, baseUrl);

const postGourmetStart = async (gourmetStartRequest: GourmetStartRequest) => {
  return await gourmetApi.postGourmetStart(gourmetStartRequest);
};

export const gourmetStartRequest = async (
  gourmetStartRequest: GourmetStartRequest
) => {
  const { questions, id } = (await postGourmetStart(gourmetStartRequest)).data;
  store.commit("setQuestions", questions);
  store.commit("setGourmetSearchId", id);
};

const postGourmetAnswer = async (
  gourmetAnswerRequest: GourmetAnswerRequest
) => {
  return await gourmetApi.postGourmetAnswer(gourmetAnswerRequest);
};

export const gourmetAnswerRequest = async (
  gourmetAnswerRequest: GourmetAnswerRequest
) => {
  const { shop } = (await postGourmetAnswer(gourmetAnswerRequest)).data;
  store.commit("setResultShop", shop);
};
