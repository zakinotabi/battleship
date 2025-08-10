export default function updateUi(op, placeElement) {
  const index = placeElement.dataset.index;

  if (op.gameboard[index] === 'hit') {
    placeElement.classList.add('hit');
    placeElement.removeAttribute('data-occupied');
  }
  if (op.gameboard[index] === 'miss') {
    placeElement.classList.add('miss');
  }
}
