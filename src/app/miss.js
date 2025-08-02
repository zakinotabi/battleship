import gameboard from './gameboard.js';

export default function miss(coordinates) {
  const board = gameboard.gameboardArr;
  board[coordinates] = 'miss';
  gameboard.set(board);
}
