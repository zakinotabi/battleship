export default function placeShipsUi(coordinates, direction, ship, boardUI) {
  let cellTarget = boardUI.querySelector(`[data-index="${coordinates}"]`);

  if (direction === 'horizontal') {
    for (let i = 0; i < ship.length; i++) {
      cellTarget.style.background = 'black';
      cellTarget.setAttribute('data-occupied', 'true');
      cellTarget = cellTarget.nextElementSibling;
    }
  } else if (direction === 'vertical') {
    for (let i = 0; i < ship.length; i++) {
      cellTarget.style.background = 'black';
      cellTarget.setAttribute('data-occupied', 'true');
      coordinates += 10;
      cellTarget = boardUI.querySelector(`[data-index="${coordinates}"]`);
    }
  }
}
