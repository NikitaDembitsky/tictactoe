import React, { useState, useEffect } from 'react'

import Board from '../Board/Board'
import CalculateWinner from '../CalculateWinner/CalculateWinner';

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (i) => {
    const hist = history.slice(0, stepNumber + 1);
    const current = hist[hist.length - 1];
    const squares = current.squares.slice();
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(hist.concat([{ squares }]));
    setStepNumber(hist.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const current = history[stepNumber];
  
  useEffect(() => {
    let winner = CalculateWinner(current.squares);

    if (winner) {
      setStatus("Winner: " + winner);
    } else {
      setStatus("Next player: " + (xIsNext ? "X" : "O"));
    }
  }, [current, xIsNext]);

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game