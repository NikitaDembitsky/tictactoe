import { SET_X_NEXT, SET_STEPNUMBER } from "./types";

export const setXIsNext = (data: boolean) => ({
  type: SET_X_NEXT,
  payload: data,
});

export const setStepNumber = (data: number) => ({
  type: SET_STEPNUMBER,
  payload: data,
});
