export default function placeShipsUi(coordinates, direction, ship, boardUI) {
  for (let i = 0; i < ship.length; i++) {
    let cellTarget = boardUI.querySelector(`[data-index="${coordinates}"]`);
    cellTarget.classList.add('ship-place');

    if (direction === 'horizontal') {
      coordinates++;
    } else if (direction === 'vertical') {
      coordinates += 10;
    }
  }
}
