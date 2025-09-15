import isSunk from '../isSunk';

export default function hit(cell, player) {
  const coordinates = cell.dataset.index;
  const board = player.gameboard;
  const shipId = board[coordinates];
  const ships = player.ships;
  const targetShip = ships[shipId];

  if (targetShip.id === shipId) {
    targetShip.hit += 1;
    if (targetShip.hit === targetShip.length) {
      targetShip.sunk = true;
      isSunk(player);
    }
  } else {
    console.error('ship Id do not match targeted ship');
  }

  board[coordinates] = 'hit';

  cell.classList.add('hit');
}
