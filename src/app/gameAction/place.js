import placeShipsUi from '../UI/placingShipsUI.js';

export default function place(ship, coordinates, shipBoxId, direction, gameboard, cell) {
  const board = gameboard;
  const boardUI = cell.parentElement;

  const row = Math.floor(coordinates / 10);
  const lastCellInRow = row * 10 + 9;
  const verticalRow = coordinates % 10;
  const lastCellInVerticalRow = verticalRow + 90;
  const firstCellInRow = lastCellInRow - 9;
  const firstCellInVerticalRow = verticalRow;

  if (direction === 'horizontal') {
    coordinates = +coordinates - +shipBoxId;
    const shipPlaceOverflow = +coordinates + ship.length - 1;

    if (shipPlaceOverflow > lastCellInRow) {
      coordinates = coordinates - (shipPlaceOverflow - lastCellInRow);
    }
    if (coordinates < firstCellInRow) {
      coordinates = firstCellInRow;
    }

    placeShipsUi(coordinates, direction, ship, boardUI);
    for (let i = 0; i < ship.length; i++) {
      board[coordinates] = ship.id;
      coordinates++;
    }
  } else if (direction === 'vertical') {
    coordinates = +coordinates - +shipBoxId * 10;
    const shipPlaceOverflow = +coordinates + (ship.length - 1) * 10;

    if (shipPlaceOverflow > lastCellInVerticalRow) {
      coordinates = coordinates - (shipPlaceOverflow - lastCellInVerticalRow);
    }
    if (coordinates < firstCellInVerticalRow) {
      coordinates = firstCellInVerticalRow;
    }
    placeShipsUi(coordinates, direction, ship, boardUI);
    for (let i = 0; i < ship.length; i++) {
      board[coordinates] = ship.id;
      coordinates += 10;
    }
  }
  console.log(board);
}
