import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import { Move } from "./types";
import { calculateWinner } from "./utils";
import Board from "./components/Board";

const App = () => {
  const [moves, setMoves] = useState<Move[]>(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [winner, setWinner] = useState<Move>(null);

  useEffect(() => {
    if (calculateWinner(moves)) {
      const lastMove = xIsNext ? "O" : "X";
      setWinner(lastMove);
    } else {
      setWinner(null);
    }
  }, [moves, xIsNext]);

  const handleClick = (i: number) => {
    const currentMoves = [...moves];
    if (calculateWinner(moves) || moves[i]) {
      return;
    }
    currentMoves[i] = xIsNext ? "X" : "O";
    setMoves(currentMoves);
    setXisNext(!xIsNext);
  };

  const resetMoves = () => {
    setMoves(Array(9).fill(null));
    setXisNext(true);
  };

  return (
    <Container>
      <Header>Tic Tac Toe</Header>
      <Board moves={moves} onClickSquare={(i) => handleClick(i)} />
      <ButtonStyled onClick={() => resetMoves()}>
        <b>Reset</b>
      </ButtonStyled>
      {winner && <Text>{winner} has win!</Text>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  text-align: center;
  color: #28527a;
`;

const ButtonStyled = styled.button`
  margin: 30px;
  border: 2px solid #28527a;
  background: #8ac4d0;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: #28527a;
  align-self: center;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  color: #28527a;
`;

export default App;
