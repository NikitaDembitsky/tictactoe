import { BoardHistory } from "../types";
import { SET_X_NEXT, SET_STEPNUMBER, SET_HISTORY } from "./types";

export interface xIsNext {
  type: "SET_X_NEXT";
  payload: boolean;
}

export interface stepNumber {
  type: "SET_STEPNUMBER";
  payload: number;
}

export interface historyAction {
  type: "SET_HISTORY";
  payload: BoardHistory;
}

export const setXIsNext = (data: boolean): xIsNext => ({
  type: SET_X_NEXT,
  payload: data,
});

export const setStepNumber = (data: number): stepNumber => ({
  type: SET_STEPNUMBER,
  payload: data,
});

export const setHistory = (data: BoardHistory): historyAction => ({
  type: SET_HISTORY,
  payload: data,
});
