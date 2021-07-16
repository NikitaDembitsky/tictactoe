import React from "react";
import "./Square.css";
import { SquareValue } from "../../types";

interface Props {
  onClick(): void;
  value: SquareValue;
}

const Square: React.FC<Props> = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
