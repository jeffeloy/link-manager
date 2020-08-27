import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxPromise from "redux-promise";

import loginReducer from "./pages/Login/LoginReducer";
import registerReducer from "./pages/Register/RegisterReducer";

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
