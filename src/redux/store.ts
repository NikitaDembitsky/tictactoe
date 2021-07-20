import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { historyReducer } from "./reducers/historyReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  historyReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
