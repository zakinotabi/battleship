import placeShipsUi from '../UI/placingShipsUI.js';
import updateFinishBtn from '../UI/readyBtnUI.js';

function updateBoard(board, startCoord, direction, ship) {
  for (let i = 0; i < ship.length; i++) {
    const idx = direction === 'horizontal' ? startCoord + i : startCoord + i * 10;
    board[idx] = ship.id;
  }
}

function updateUi(startCoord, direction, ship, cell) {
  placeShipsUi(startCoord, direction, ship, cell);
}

export default function place(ship, startCoord, direction, gameboard, cell) {
  const board = gameboard;

  updateBoard(board, startCoord, direction, ship);
  updateUi(startCoord, direction, ship, cell);

  // console.log(board);
}
