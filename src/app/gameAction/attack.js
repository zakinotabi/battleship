import miss from './attack/miss.js';
import hit from './attack/hit.js';

export default function attack(cell, player) {
  const board = player.gameboard;
  const coordinates = cell.dataset.index;
  if (board[coordinates] === '.') {
    miss(cell, player);
    return 'miss';
  } else if (!isNaN(board[coordinates])) {
    hit(cell, player);
    return 'hit';
  } else {
    console.log('🚀 ~ attack ~ board[coordinates]:', board[coordinates]);
    console.log('Position already attacked!');
    return false;
  }
}
