export default function checkPlaceIfOccupied(board, startCoord, direction, ship) {
  for (let i = 0; i < ship.length; i++) {
    const idx = direction === 'horizontal' ? startCoord + i : startCoord + i * 10;
    if (!isNaN(board[idx])) {
      return true; // occupied
    }
  }
  return false; // not occupied
}
