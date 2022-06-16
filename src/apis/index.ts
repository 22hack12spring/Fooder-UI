import { Configuration, GourmetStartRequest, GourmetApi } from "./generated";
import { store } from "../store";

const baseUrl = "http://localhost:8080/api/v1";

const config = new Configuration({ basePath: baseUrl });

const gourmetApi: GourmetApi = new GourmetApi(config, baseUrl);

const postGourmetStart = async (gourmetStartRequest: GourmetStartRequest) => {
  return await gourmetApi.postGourmetStart(gourmetStartRequest);
};

export const gourmetStartRequest = async (
  gourmetStartRequest: GourmetStartRequest
) => {
  const questions = (await postGourmetStart(gourmetStartRequest)).data
    .questions;
  store.commit("setQuestions", questions);
};
