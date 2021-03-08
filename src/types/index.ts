export type Move = null | "X" | "O";

export interface SquareProps {
  onClick: () => void;
  value: string;
}

export interface BoardProps {
  moves: Move[];
  onClickSquare: (i: number) => void;
}
