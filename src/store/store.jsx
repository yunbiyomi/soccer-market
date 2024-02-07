import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('Updated state: ', store.getState());
})

export default store;