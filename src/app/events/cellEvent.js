import place from '../gameAction/place.js';
import updateFinishBtn from '../UI/readyBtnUI.js';
import calculatePlace from './calculateStartPosition.js';
import checkPlaceIfOccupied from './checkPlaceIfOccupied.js';
import hoverEffectUi from '../UI/hoverEffectUI.js';
import gameState from '../init/initializePlayers.js';

const addEventsToCell = {
  dragDrop(cell) {
    const player1 = gameState.players.player1;
    const player2 = gameState.players.player2;
    const comp = gameState.players.comp;
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
      const boardUI = cell.parentElement;

      hoverCells.forEach((place) => {
        place.classList.remove('ship-place-hover');
      });

      if (!selectedShipData) return;

      const gameboard = +cell.dataset.gameboard === 1 ? player1.gameboard : player2.gameboard;
      const player = +cell.dataset.gameboard === 1 ? player1 : player2;
      const shipContainer = document.getElementById(`ships-container${player.id}`);
      shipElement = shipContainer.querySelector(`.ship-${selectedShipData.shipId}`);

      if (checkPlaceIfOccupied(gameboard, startCoord, direction, boardUI)) return;

      place(player, ship, startCoord, direction, cell);

      shipElement.setAttribute('draggable', 'false');
      shipElement.classList.add('dropped');
      shipElement.style.opacity = '0.2';
      updateFinishBtn(player);
    });
  },
};

export default addEventsToCell;
