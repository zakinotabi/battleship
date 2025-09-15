import miss from './attack/miss.js';
import hit from './attack/hit.js';

export default function attack(cell, opp) {
  const board = opp.gameboard;
  const coordinates = cell.dataset.index;

  if (board[coordinates] === '.') {
    miss(cell, opp);
    return 'miss';
  } else if (!isNaN(board[coordinates])) {
    hit(cell, opp);
    return 'hit';
  } else {
    return false;
  }
}
