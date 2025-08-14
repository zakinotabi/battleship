export default function hoverEffectUi(coordinates, direction, ship, cell) {
  let cellTarget = cell.parentElement?.querySelector(`[data-index="${coordinates}"]`);

  if (direction === 'horizontal') {
    for (let i = 0; i < ship.length; i++) {
      cellTarget.classList.add('ship-place-hover');
      cellTarget = cellTarget.nextElementSibling;
    }
  } else if (direction === 'vertical') {
    for (let i = 0; i < ship.length; i++) {
      cellTarget.classList.add('ship-place-hover');
      coordinates += 10;
      cellTarget = cellTarget.parentElement.querySelector(`[data-index="${coordinates}"]`);
    }
  }
}
