export default function hit(coordinates, player) {
  const board = player.gameboard;
  const shipId = board[coordinates];
  const ships = player.ships;
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
