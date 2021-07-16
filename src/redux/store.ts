import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { historyReducer } from "./reducers/historyReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  historyReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
