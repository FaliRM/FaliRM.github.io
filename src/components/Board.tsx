import React from "react";
import styled from "styled-components/macro";

import { SquareProps, BoardProps } from "../types";

const Square = ({ onClick, value }: SquareProps) => {
  return <SquareStyled onClick={onClick}>{value}</SquareStyled>;
};

const Board = ({ moves, onClickSquare }: BoardProps) => (
  <BoardStyled>
    {moves.map((move, i) => (
      <Square value={move} onClick={() => onClickSquare(i)} />
    ))}
  </BoardStyled>
);

const SquareStyled = styled.button`
  background: #8ac4d0;
  border: 2px solid #28527a;
  font-size: 40px;
  fontweight: 800;
  cursor: pointer;
  color: #28527a;
`;

const BoardStyled = styled.div`
  border: 4px solid #28527a;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

export default Board;
