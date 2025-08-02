import shipsArray from './ships.js';
import gameboard from './gameboard.js';

export default function hit(coordinates) {
  const board = gameboard.gameboardArr;
  const shipId = board[coordinates];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < shipsArray.length; i++) {
    if (shipsArray[i].id === shipId) {
      shipsArray[i].hit += 1;
      if (shipsArray[i].hit === shipsArray[i].length) {
        shipsArray[i].sunk = true;
      }
      break;
    }
  }
  board[coordinates] = 'hit';
  gameboard.set(board);
}
