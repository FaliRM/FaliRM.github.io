import { Move } from "../types";

export const calculateWinner = (moves: Move[]) => {
  const winnerCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winnerCombs.length; i++) {
    const [a, b, c] = winnerCombs[i];
    if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
      return moves[a];
    }
  }
  return null;
};
