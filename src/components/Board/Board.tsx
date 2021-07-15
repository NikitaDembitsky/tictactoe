import React from "react";
import { ReactNode } from "react";
import Square from "../Square/Square";
import { SquareValue } from "../../types";
import "./Board.css";

interface Props {
  onClick(i: number): void;
  squares: SquareValue[];
}

const Board: React.FC<Props> = ({onClick, squares}) => {
  const renderSquare = (i: number): ReactNode => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
