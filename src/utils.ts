import { SquareValue, Symbol } from "./types";
import { WINNING_GRID } from "./constants";

export const calculateWinner = (squares: SquareValue[]): SquareValue => {
  for (let i = 0; i < WINNING_GRID.length; i++) {
    const [a, b, c] = WINNING_GRID[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const checkWinner = (xIsNext: any, winner: any) => {
  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status =
      "Next player: " +
      (xIsNext ? Symbol.firstPlayerSymbol : Symbol.secondPlayerSymbol);
  }
  return status;
};
