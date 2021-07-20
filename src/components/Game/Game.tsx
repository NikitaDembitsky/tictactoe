import React from "react";
import { useMemo } from "react";
import Board from "../Board/Board";
import "./Game.css";
import { calculateWinner, checkWinner } from "../../utils";
import useHistory from "../../hooks/useHistory";
import { HistoryStep } from "../../types";

const Game: React.FC = () => {
  const { xIsNext, history, handleClick, jumpTo, current } = useHistory();
  const winner = calculateWinner(current.squares);


  const moves = history.map((step: HistoryStep, move: number) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status: string = useMemo(
    () => checkWinner(xIsNext, winner),
    [xIsNext, winner]
  );

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
