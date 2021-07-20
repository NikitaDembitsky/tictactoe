import { SET_X_NEXT, SET_STEPNUMBER, SET_HISTORY } from "../types";
import {HistoryAction} from "../actions"
import { BoardHistory } from "../../types";

interface historyState{
  xIsNext: boolean,
  stepNumber: number,
  history: BoardHistory
}

const defaultState: historyState = {
  xIsNext: true,
  stepNumber: 0,
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
};

const historyReducer = (state = defaultState, action: HistoryAction): historyState => {
  switch (action.type) {
    case SET_X_NEXT:
      return {
        ...state,
        xIsNext: action.payload,
      };
    case SET_STEPNUMBER:
      return {
        ...state,
        stepNumber: action.payload,
      };

    case SET_HISTORY: {
      return {
        ...state,
        history: action.payload,
      };
    }
    default:
      return state;
  }
};

export { historyReducer };
