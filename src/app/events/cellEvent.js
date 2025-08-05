import updateUi from '../UI/updateUi.js';

export default function addEventsToCell(cell, player1, player2) {
  if (+cell.dataset.gameboard === 1) {
    cell.addEventListener('click', () => {
      player2.attack(cell.dataset.index);
      updateUi(player2.op, cell);
    });
  } else {
    cell.addEventListener('click', () => {
      player1.attack(cell.dataset.index);
      updateUi(player1.op, cell);
    });
  }
}
