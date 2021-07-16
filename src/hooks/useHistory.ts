import { calculateWinner } from "../utils";
import { Symbol } from "../types";
import { useState } from "react";
import { SquareValue } from "../types";

const useHistory = (): {xIsNext:boolean, history: any, handleClick:any, jumpTo: any, current: any } => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [history, setHistory] = useState<{ squares: SquareValue[] }[]>([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const current = history[stepNumber];

  const handleClick = (i: number) => {
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
  };

  const jumpTo = (step: number): void => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  return {
    xIsNext,
    history,
    handleClick,
    jumpTo,
    current,
  };
};

export default useHistory;
