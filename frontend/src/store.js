import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxPromise from "redux-promise";

import loginReducer from "./pages/Login/LoginReducer";

const reducers = combineReducers({
  login: loginReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
