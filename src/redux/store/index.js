import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducer from "./../reducers/index";

// allows redux to accept functions as actions
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
