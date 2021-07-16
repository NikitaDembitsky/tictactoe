import { SET_X_NEXT, SET_STEPNUMBER } from "../types";

const defaultState = {
  xIsNext: true,
  stepNumber: 0,
};

const historyReducer = (state = defaultState, action: any) => {
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

    default:
      return state;
  }
};

export { historyReducer };
