export default function hit(coordinates, board, ships) {
  const shipId = board[coordinates];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ships.length; i++) {
    if (ships[i].id === shipId) {
      ships[i].hit += 1;
      if (ships[i].hit === ships[i].length) {
        ships[i].sunk = true;
      }
      break;
    }
  }
  board[coordinates] = 'hit';
}
