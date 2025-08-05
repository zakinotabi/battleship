export default function updateUi(op, placeElement) {
  const index = placeElement.dataset.index;

  if (op.gameboard[index] === 'hit') {
    placeElement.style.backgroundColor = 'red';
  }
  if (op.gameboard[index] === 'miss') {
    placeElement.style.backgroundColor = 'blue';
  }
}
