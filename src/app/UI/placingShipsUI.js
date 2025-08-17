export default function placeShipsUi(coordinates, direction, ship, cell) {
  for (let i = 0; i < ship.length; i++) {
    let cellTarget = cell.parentElement.querySelector(`[data-index="${coordinates}"]`);

    cellTarget.classList.add('ship-default-color', `ship-place-${ship.id}`);

    if (direction === 'horizontal') {
      coordinates++;
    } else if (direction === 'vertical') {
      coordinates += 10;
    }
  }
}
