import placeShipsUi from '../UI/placingShipsUi';

export default function place(ship, coordinates, direction, gameboard, cell) {
  const board = gameboard;
  const boardUI = cell.parentElement;
  // const column = ((coordinates - 1) % 10) + 1;
  const row = Math.floor((coordinates - 1) / 10) + 1;
  const lastCellInRow = row * 10;
  const shipPlace = +coordinates + ship.length;
  const verticalRow = +coordinates % 10;
  const lastCellInVerticalRow = verticalRow + 90;

  if (shipPlace > lastCellInRow && direction === 'horizontal') {
    // return "Left half";
    coordinates = coordinates - (shipPlace - lastCellInRow);
    for (let i = 0; i < ship.length; i++) {
      board[coordinates] = ship.id;
    }
  } else if (shipPlace > lastCellInVerticalRow && direction === 'vertical') {
    // return "Right half";
    coordinates = coordinates - (shipPlace - lastCellInVerticalRow);
    for (let i = 0; i < ship.length; i++) {
      board[coordinates] = ship.id;
    }
  }

  placeShipsUi(coordinates, ship, boardUI);
}
