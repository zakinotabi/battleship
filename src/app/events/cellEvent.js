import updateUi from '../UI/hitAndMissUI.js';
import place from '../gameAction/place.js';
import updateFinishBtn from '../UI/finishBtnUI.js';

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

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drop-hover');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drop-hover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    // dropZone.classList.remove('drop-hover');
    // Prevent drop if cell is occupied
    if (dropZone.getAttribute('data-occupied') === 'true') {
      return;
    }
    const selected = JSON.parse(e.dataTransfer.getData('shipDragged'));
    const coordinates = dropZone.getAttribute('data-index');
    const ship = player1.ships[selected.shipId];
    const direction = selected.direction;
    const shipBoxId = selected.shipBoxId;

    const shipElementDOM = document.querySelector(`.ship-${selected.shipId}`);

    shipElementDOM.setAttribute('draggable', false);
    shipElementDOM.classList.add('dropped');
    shipElementDOM.style.opacity = '0.7';

    console.log('🚀 ~ addEventsToCell ~ dropZone:', dropZone.nextElementSibling);

    if (+dropZone.dataset.gameboard === 1) {
      updateFinishBtn(player1);
      place(ship, coordinates, shipBoxId, direction, player1.gameboard, dropZone);
    } else {
      updateFinishBtn(player2);
      place(ship, coordinates, shipBoxId, direction, player2.gameboard, dropZone);
    }
  });
}
