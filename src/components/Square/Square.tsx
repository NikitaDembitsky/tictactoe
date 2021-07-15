import React from "react";
import "./Square.css";
import { SquareValue } from "../../types";

interface Props {
  onClick(): void;
  value: SquareValue;
}

const Square: React.FC<Props> = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
