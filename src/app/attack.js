import miss from './miss.js';
import gameboard from './gameboard.js';
import hit from './hit.js';

export default function attack(coordinates) {
  const board = gameboard.gameboardArr;
  if (board[coordinates] === '.') {
    miss(coordinates);
    return 'miss';
  } else if (!isNaN(board[coordinates])) {
    hit(coordinates);
    return 'hit';
  } else {
    console.log('Position already attacked!');
    return false;
  }
}
