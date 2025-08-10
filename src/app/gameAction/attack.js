import miss from './miss.js';
import hit from './hit.js';

export default function attack(coordinates, player) {
  const board = player.gameboard;

  if (board[coordinates] === '.') {
    console.log('🚀 ~ attack ~ board:', board);

    miss(coordinates, player);
    return 'miss';
  } else if (!isNaN(board[coordinates])) {
    hit(coordinates, player);
    return 'hit';
  } else {
    console.log('Position already attacked!');
    return false;
  }
}
