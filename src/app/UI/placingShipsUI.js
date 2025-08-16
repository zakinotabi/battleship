export default function placeShipsUi(coordinates, direction, ship, boardUI) {
  for (let i = 0; i < ship.length; i++) {
    let cellTarget = boardUI.parentElement.querySelector(`[data-index="${coordinates}"]`);
    //check that later i added parentElement it was working just fine without it
    // console.log('🚀 ~ placeShipsUi ~ boardUI:', boardUI);

    cellTarget.classList.add('ship-place');

    if (direction === 'horizontal') {
      coordinates++;
    } else if (direction === 'vertical') {
      coordinates += 10;
    }
  }
}
