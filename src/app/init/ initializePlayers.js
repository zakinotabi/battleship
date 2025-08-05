import Player1 from '../players/player1';
import Player2 from '../players/player2';
import generateTable from '../UI/generateTable';
import addShips from '../UI/addShips';

export default function initializePlayers() {
  const player1 = new Player1();
  const player2 = new Player2();

  player1.op = player2;
  player2.op = player1;
  generateTable(player1, player2);
  addShips(player1, player2);
}
