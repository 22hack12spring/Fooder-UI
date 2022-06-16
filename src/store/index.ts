import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { GourmetQuestion } from "../apis/generated";

interface State {
  questions: Array<GourmetQuestion> | null;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    questions: null,
  },
  mutations: {
    setQuestions(state, questions: Array<GourmetQuestion>) {
      state.questions = questions;
    },
  },
});
export const useStore = () => {
  return baseUseStore(key);
};
