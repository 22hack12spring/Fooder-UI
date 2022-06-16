import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
interface State {}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({});

export const useStore = () => {
  return baseUseStore(key);
};
