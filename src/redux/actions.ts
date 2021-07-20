import { BoardHistory } from "../types";
import { SET_X_NEXT, SET_STEPNUMBER, SET_HISTORY } from "./types";

export type HistoryAction =
  | { type: "SET_X_NEXT"; payload: boolean }
  | { type: "SET_STEPNUMBER"; payload: number }
  | { type: "SET_HISTORY"; payload: BoardHistory };

export const setXIsNext = (data: boolean): HistoryAction => ({
  type: SET_X_NEXT,
  payload: data,
});

export const setStepNumber = (data: number): HistoryAction => ({
  type: SET_STEPNUMBER,
  payload: data,
});

export const setHistory = (data: BoardHistory): HistoryAction => ({
  type: SET_HISTORY,
  payload: data,
});
