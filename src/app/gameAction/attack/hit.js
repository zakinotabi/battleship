import isSunk from '../isSunk';

export default function hit(cell, player) {
  const coordinates = cell.dataset.index;
  const board = player.gameboard;
  const shipId = board[coordinates];
  const ships = player.ships;

  for (let i = 0; i < ships.length; i++) {
    if (ships[i].id === shipId) {
      ships[i].hit += 1;
      if (ships[i].hit === ships[i].length) {
        ships[i].sunk = true;
        isSunk(player);
      }
      break;
    }
  }
  board[coordinates] = 'hit';

  cell.classList.add('hit');
}
