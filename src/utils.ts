import { SquareValue, PlayerSymbol } from "./types";
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

export const checkWinner = (xIsNext: boolean, winner: number | PlayerSymbol | null): string => {
  let status: string;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status =
      "Next player: " +
      (xIsNext ? PlayerSymbol.firstPlayerSymbol : PlayerSymbol.secondPlayerSymbol);
  }
  return status;
};
