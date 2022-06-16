import { Configuration, GourmetStartRequest, GourmetApi } from "./generated";

const baseUrl = "http://localhost:8080/api/v1";

const config = new Configuration({ basePath: baseUrl });

const gourmetApi: GourmetApi = new GourmetApi(config, baseUrl);

const postGourmetStart = async (x: GourmetStartRequest) => {
  return await gourmetApi.postGourmetStart(x);
};

export const getQuestion = (await postGourmetStart({})).data.questions;
