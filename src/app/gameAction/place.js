import placeShipsUi from '../UI/placingShipsUI.js';

function updateBoard(board, startCoord, direction, ship) {
  for (let i = 0; i < ship.length; i++) {
    const idx = direction === 'horizontal' ? startCoord + i : startCoord + i * 10;
    board[idx] = ship.id;
  }
}

function updateUi(startCoord, direction, ship, boardUI) {
  placeShipsUi(startCoord, direction, ship, boardUI);
}

export default function place(ship, startCoord, direction, gameboard, cell) {
  const board = gameboard;
  const boardUI = cell.parentElement;

  updateBoard(board, startCoord, direction, ship);
  updateUi(startCoord, direction, ship, boardUI);

  // console.log(board);
}
