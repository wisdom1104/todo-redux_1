import { legacy_createStore as createStore } from "redux"; //스토어를 만들어 주는 api
import { combineReducers } from "redux"; // 리듀서들을 하나로 묶는 역할
import todos from "../modules/todos"; // 모듈을 스토어에 연결하려면 임포트

const rootReducer = combineReducers({ todos });
const store = createStore(rootReducer);

export default store;
