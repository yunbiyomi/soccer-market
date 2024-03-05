import { legacy_createStore as createStore } from "redux";
import rootReducer from "../features/rootReducer";

const store = createStore(rootReducer);

// store 구독 주석 처리
// store.subscribe(() => {
//   console.log('Updated state: ', store.getState());
// })

export default store;