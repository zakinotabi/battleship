import updateUi from '../UI/hitAndMissUi.js';
import place from '../gameAction/place.js';

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

  const dropZone = cell;

  // Prevent default to allow dropping
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drop-hover');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drop-hover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drop-hover');

    const selected = JSON.parse(e.dataTransfer.getData('shipDragged'));
    const coordinates = dropZone.getAttribute('data-index');

    if (+dropZone.dataset.gameboard === 1) {
      const ship = player1.ships[selected.shipId];
      place(ship, coordinates, 'h', player1.gameboard, dropZone);
    } else {
      place(selected.shipId, coordinates, 'v', 'cellTarget');
    }
  });
}
