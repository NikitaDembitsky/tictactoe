import { calculateWinner } from "../utils";
import { Symbol } from "../types";
import { useState } from "react";
import { SquareValue } from "../types";

function useHistory(i: number): void {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [history, setHistory] = useState<{ squares: SquareValue[] }[]>([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const newHistory = history.slice(0, stepNumber + 1);
  const current = newHistory[newHistory.length - 1];
  const squares = current.squares.slice();

  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = xIsNext ? Symbol.firstPlayerSymbol : Symbol.secondPlayerSymbol;
  setHistory(
    newHistory.concat([
      {
        squares: squares,
      },
    ])
  );
  setStepNumber(newHistory.length);
  setXIsNext(!xIsNext);

  
}


export default useHistory;
