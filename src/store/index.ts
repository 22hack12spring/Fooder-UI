import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { GourmetQuestion, GourmetShop } from "../apis/generated";

interface State {
  questions: Array<GourmetQuestion> | null;
  result: GourmetShop | null;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    questions: null,
    result: null,
  },
  mutations: {
    setQuestions(state, questions: Array<GourmetQuestion>) {
      state.questions = questions;
    },
    setResult(state, result: GourmetShop) {
      state.result = result;
    },
  },
});

export const useStore = () => {
  return baseUseStore(key);
};
