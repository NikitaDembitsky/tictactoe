import { SET_X_NEXT, SET_STEPNUMBER, SET_HISTORY } from "./types";

export const setXIsNext = (data: boolean) => ({
  type: SET_X_NEXT,
  payload: data,
});

export const setStepNumber = (data: number) => ({
  type: SET_STEPNUMBER,
  payload: data,
});

export const setHistory = (data: any) => ({
  type: SET_HISTORY,
  payload: data,
});
