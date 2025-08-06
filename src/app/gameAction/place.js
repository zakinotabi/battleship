import placeShipsUi from '../UI/placingShipsUI.js';

export default function place(ship, coordinates, shipBoxId, direction, gameboard, cell) {
  const board = gameboard;
  const boardUI = cell.parentElement;

  const row = Math.floor((coordinates - 1) / 10 + 1);
  const lastCellInRow = row * 10;
  const verticalRow = (+coordinates % 10) + 1;
  const lastCellInVerticalRow = verticalRow + 90;

  if (direction === 'horizontal') {
    const shipPlaceOverflow = +coordinates + ship.length;
    coordinates = +coordinates - +shipBoxId;
    if (shipPlaceOverflow > lastCellInRow) {
      coordinates = coordinates - (shipPlaceOverflow - lastCellInRow);
    }
    for (let i = 0; i < ship.length; i++) {
      board[coordinates] = ship.id;
    }
  } else if (direction === 'vertical') {
    coordinates = +coordinates - +shipBoxId * 10;
    const shipPlaceOverflow = +coordinates + ship.length * 10 - 9;
    console.log(shipPlaceOverflow);
    if (shipPlaceOverflow > lastCellInVerticalRow) {
      coordinates = coordinates - (shipPlaceOverflow - lastCellInVerticalRow);
    }
    for (let i = 0; i < ship.length * 10; i += 10) {
      board[coordinates] = ship.id;
    }
  }

  placeShipsUi(coordinates, direction, ship, boardUI);
}
