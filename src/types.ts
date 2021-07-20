export enum PlayerSymbol {
  firstPlayerSymbol = "X",
  secondPlayerSymbol = "O",
}
export type SquareValue = PlayerSymbol | null;

export type HistoryStep = {
  squares: SquareValue[]
};

export type BoardHistory = HistoryStep[];
