import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./reducer/authReducer";
import courseReducer from "./reducer/courseReducer";

const reducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
});

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch);
  } else {
    next(action);
  }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
