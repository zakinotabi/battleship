import gameboard from './gameboard.js';

export default function miss(coordinates) {
  const board = gameboard.get();
  board[coordinates] = 'miss';
  gameboard.set(board);
}
