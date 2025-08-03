import miss from './miss.js';
import hit from './hit.js';

export default function attack(coordinates, op) {
  const board = op.gameboard;
  const ships = op.ships;
  if (board[coordinates] === '.') {
    miss(coordinates, board);
    return 'miss';
  } else if (!isNaN(board[coordinates])) {
    hit(coordinates, board, ships);
    return 'hit';
  } else {
    console.log('Position already attacked!');
    return false;
  }
}
