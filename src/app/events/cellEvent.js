import updateUi from '../UI/hitAndMissUI.js';
import place from '../gameAction/place.js';
import updateFinishBtn from '../UI/finishBtnUI.js';
import calculatePlace from './calculateStartPosition.js';
import checkPlaceIfOccupied from './checkPlaceIfOccupied.js';
import hoverEffectUi from '../UI/hoverEffectUI.js';
import attack from '../gameAction/attack.js';

const addEventsToCell = {
  attack(cell, player1, player2) {
    cell.addEventListener('click', () => {
      const attacker = +cell.dataset.gameboard === 1 ? player2 : player1;
      attack(cell.dataset.index, attacker);
      updateUi(attacker, cell);
    });
  },

  dragDrop(cell, player1, player2) {
    let selectedShipData, ship, direction, shipBoxId, startCoord, shipElement;

    cell.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (!e.dataTransfer.getData('shipDragged')) return;
      selectedShipData = JSON.parse(e.dataTransfer.getData('shipDragged'));

      ship = player1.ships[selectedShipData.shipId];
      direction = selectedShipData.direction;
      shipBoxId = selectedShipData.shipBoxId;
      startCoord = calculatePlace(cell.dataset.index, shipBoxId, direction, ship);

      const gameboard = +cell.dataset.gameboard === 1 ? player1.gameboard : player2.gameboard;
      if (checkPlaceIfOccupied(gameboard, startCoord, direction, ship)) return;

      hoverEffectUi(startCoord, direction, ship, cell);
    });

    cell.addEventListener('dragleave', () => {
      const hoverCells = cell.parentElement.querySelectorAll('.ship-place-hover');
      hoverCells.forEach((place) => {
        place.classList.remove('ship-place-hover');
      });
    });

    cell.addEventListener('drop', (e) => {
      e.preventDefault();
      const hoverCells = cell.parentElement.querySelectorAll('.ship-place-hover');
      hoverCells.forEach((place) => {
        place.classList.remove('ship-place-hover');
      });

      if (!selectedShipData) return;

      const gameboard = +cell.dataset.gameboard === 1 ? player1.gameboard : player2.gameboard;
      const player = +cell.dataset.gameboard === 1 ? player1 : player2;
      const shipContainer = document.getElementById(`ships-container${player.id}`);
      shipElement = shipContainer.querySelector(`.ship-${selectedShipData.shipId}`);

      if (checkPlaceIfOccupied(gameboard, startCoord, direction, ship)) return;

      place(ship, startCoord, direction, gameboard, cell);

      shipElement.setAttribute('draggable', 'false');
      shipElement.classList.add('dropped');
      shipElement.style.opacity = '0.2';
      updateFinishBtn(player);
    });
  },
};

export default addEventsToCell;
