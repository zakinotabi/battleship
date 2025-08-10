// export default function placeShipsUi(coordinates, direction, ship, boardUI) {
//   let cellTarget = boardUI.querySelector(`[data-index="${coordinates}"]`);

//   if (direction === 'horizontal') {
//     for (let i = 0; i < ship.length; i++) {
//       cellTarget.classList.add('ship-place');
//       cellTarget.setAttribute('data-occupied', 'true');
//       cellTarget = cellTarget.nextElementSibling;
//     }
//   } else if (direction === 'vertical') {
//     for (let i = 0; i < ship.length; i++) {
//       cellTarget.style.background = 'black';
//       cellTarget.classList.add('ship-place');
//       cellTarget.setAttribute('data-occupied', 'true');
//       coordinates += 10;
//       cellTarget = boardUI.querySelector(`[data-index="${coordinates}"]`);
//     }
//   }
// }

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
