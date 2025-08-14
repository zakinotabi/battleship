import Player1 from '../players/player1.js';
import Player2 from '../players/player2.js';
import generateTable from '../UI/generateTableUI.js';
import addShips from '../UI/createShipsUI.js';
import startBtnEvent from '../events/startBtnEvent.js';
import Comp from '../players/comp.js';
import reset from '../events/resetEvent.js';

export default function initializePlayers() {
  const player1 = new Player1();
  const player2 = new Player2();
  const comp = new Comp();

  player1.op = player2;
  player2.op = player1;
  generateTable(player1, player2);
  addShips(player1, player2);
  startBtnEvent();
  reset(player1, player2, comp);
}
