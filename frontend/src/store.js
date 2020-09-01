import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxPromise from "redux-promise";

import accountReducers from "./reducers/AccountReducers";

const reducers = combineReducers({
  account: accountReducers,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
