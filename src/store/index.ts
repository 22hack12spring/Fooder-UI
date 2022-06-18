import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { GourmetQuestion, GourmetShop } from "../apis/generated";

interface State {
  gourmetSearchId: string | null;
  questions: Array<GourmetQuestion> | null;
  resultShop: GourmetShop | null;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    gourmetSearchId: null,
    questions: null,
    resultShop: null,
  },
  mutations: {
    setGourmetSearchId(state, gourmetSearchId: string) {
      state.gourmetSearchId = gourmetSearchId;
    },
    setQuestions(state, questions: Array<GourmetQuestion>) {
      state.questions = questions;
    },
    setResultShop(state, resultShop: GourmetShop) {
      state.resultShop = resultShop;
    },
  },
});

export const useStore = () => {
  return baseUseStore(key);
};
