import place from '../gameAction/place';
import hideShipsFromTable from '../UI/hideShipsFromTableUI';
import calculatePlace from './calculateStartPosition';
import checkPlaceIfOccupied from './checkPlaceIfOccupied';
import gameState from '../init/initializePlayers';
import updateFinishBtn from '../UI/readyBtnUI';

const randomBtn1 = document.querySelector('.random-btn-p1');
const randomBtn2 = document.querySelector('.random-btn-p2');

export default function randomBtnEvent() {
  const player1 = gameState.players.player1;
  const player2 = gameState.players.player2;
  const comp = gameState.players.comp;

  const playerContainer1 = document.querySelector('.player1-container');
  const playerContainer2 = document.querySelector('.player2-container');
  const activeBoard1 = playerContainer1.querySelector('table');
  const activeBoard2 = playerContainer2.querySelector('table');
  const shipsP1 = playerContainer1.querySelectorAll('.ship');
  const shipsP2 = playerContainer2.querySelectorAll('.ship');

  randomBtn1.addEventListener('click', () => {
    //reset board and damage
    player1.reset();
    hideShipsFromTable(activeBoard1);
    for (let i = 0; i < player1.ships.length; i++) {
      tryPlaceShip(player1, i, activeBoard1);
    }
    shipsP1.forEach((ship) => {
      ship.classList.add('dropped');
      ship.draggable = 'false';
      ship.style.opacity = '0.5';
    });
    updateFinishBtn(player1);
  });

  randomBtn2.addEventListener('click', () => {
    //reset board and damage
    player2.reset();
    hideShipsFromTable(activeBoard2);
    for (let i = 0; i < player2.ships.length; i++) {
      tryPlaceShip(player2, i, activeBoard2);
    }
    shipsP2.forEach((ship) => {
      ship.classList.add('dropped');
      ship.draggable = 'false';
      ship.style.opacity = '0.5';
    });
    updateFinishBtn(player2);
  });
}

export const tryPlaceShip = (player, shipIndex, activeBoard, attempts = 0) => {
  const maxAttempts = 100;

  if (attempts >= maxAttempts) {
    console.error(`Failed to place ship after ${maxAttempts} attempts`);
    return;
  }

  const ship = player.ships[shipIndex];

  const coord = Math.floor(Math.random() * 100);
  const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
  const startCoord = calculatePlace(coord, 0, direction, ship);

  if (!checkPlaceIfOccupied(player.gameboard, startCoord, direction, ship)) {
    place(player, ship, startCoord, direction, activeBoard);
  } else {
    tryPlaceShip(player, shipIndex, activeBoard, attempts + 1);
  }
};
