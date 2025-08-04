import Player1 from './players/player1.js';
import Player2 from './players/player2.js';
import { updateUi } from './UI.js';
import { addShips } from './UI.js';
let play_1 = new Player1('adam');
let play_2 = new Player2('teo');
play_1.op = play_2;
play_2.op = play_1;
addShips(play_1);

export default function addEventsToCell(cell) {
  if (+cell.dataset.gameboard === 1) {
    cell.addEventListener('click', () => {
      play_2.attack(cell.dataset.index);
      updateUi(play_2.op, cell);
    });
  } else {
    cell.addEventListener('click', () => {
      play_1.attack(cell.dataset.index);
      updateUi(play_1.op, cell);
    });
  }
}
