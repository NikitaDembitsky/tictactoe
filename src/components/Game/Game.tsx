import { useMemo } from "react";
import { Symbol } from "../../types";
import Board from "../Board/Board";
import "./Game.css";
import { calculateWinner, checkWinner } from "../../utils";
import useHistory from "../../hooks/useHistory";

const Game: React.FC = () => {
  const { xIsNext, history, handleClick, jumpTo, current } = useHistory();
  const winner = calculateWinner(current.squares);
  console.log(current.squares);
  const moves = history.map((step: any, move: any) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status: string;
  status = useMemo(() => checkWinner(xIsNext, winner), [xIsNext, winner]);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
