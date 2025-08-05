export default function placeShipsUi(coordinates, ship, boardUI) {
  let cellTarget = boardUI.querySelector(`[data-index="${coordinates}"]`);

  for (let i = 0; i < ship.length; i++) {
    cellTarget.style.background = 'black';
    cellTarget = cellTarget.nextElementSibling;
  }
}
