import switchTurns from '../../events/switchTurns';

export default function miss(cell, oppPlayer) {
  const coordinates = cell.dataset.index;
  const board = oppPlayer.gameboard;
  board[coordinates] = 'miss';

  cell.classList.add('miss');
  switchTurns(oppPlayer);
}
