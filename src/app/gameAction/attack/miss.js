import switchTurns from '../../events/switchTurns';

export default function miss(cell, player) {
  const coordinates = cell.dataset.index;
  const board = player.gameboard;
  board[coordinates] = 'miss';
  console.log('🚀 ~ miss ~ board:', board);
  cell.classList.add('miss');
  switchTurns(player.op);
}
