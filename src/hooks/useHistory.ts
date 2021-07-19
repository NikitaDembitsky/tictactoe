import { calculateWinner } from "../utils";
import { Symbol } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { setXIsNext, setStepNumber, setHistory } from "../redux/actions";

const useHistory = (): {
  xIsNext: boolean;
  history: any;
  handleClick: any;
  jumpTo: any;
  current: any;
} => {
  const dispath = useDispatch();
  const stepNumber = useSelector(
    (state: any) => state.historyReducer.stepNumber
  );
  const xIsNext = useSelector((state: any) => state.historyReducer.xIsNext);
  const history = useSelector((state: any) => state.historyReducer.history);
  const current = history[stepNumber];

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? Symbol.firstPlayerSymbol : Symbol.secondPlayerSymbol;
    dispath(
      setHistory(
        newHistory.concat([
          {
            squares: squares,
          },
        ])
      )
    );
    dispath(setStepNumber(newHistory.length));
    dispath(setXIsNext(!xIsNext));
  };

  const jumpTo = (step: number): void => {
    dispath(setStepNumber(step));
    dispath(setXIsNext(step % 2 === 0));
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
