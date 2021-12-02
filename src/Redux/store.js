import { combineReducers, createStore, applyMiddleware } from "redux";
import { listReducer } from "./List/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  list: listReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
