import { calculateWinner } from "../utils";
import { BoardHistory, HistoryStep, PlayerSymbol } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { setXIsNext, setStepNumber, setHistory } from "../redux/actions";
import { RootState } from "../redux/store";

const useHistory = (): {
  xIsNext: boolean;
  history: BoardHistory;
  handleClick: (i: number) => void;
  jumpTo: (step: number) => void;
  current: HistoryStep;
} => {
  const dispath = useDispatch();
  const stepNumber = useSelector(
    (state: RootState) => state.historyReducer.stepNumber
  );
  const xIsNext = useSelector(
    (state: RootState) => state.historyReducer.xIsNext
  );
  const history: BoardHistory = useSelector(
    (state: RootState) => state.historyReducer.history
  );
  const current: HistoryStep = history[stepNumber];

  const handleClick = (i: number): void => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext
      ? PlayerSymbol.firstPlayerSymbol
      : PlayerSymbol.secondPlayerSymbol;
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

  const jumpTo = (step: number) => {
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
