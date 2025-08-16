import Player1 from '../players/player1.js';
import Player2 from '../players/player2.js';
import Comp from '../players/comp.js';
import generateTable from '../UI/generateTableUI.js';
import addShips from '../UI/createShipsUI.js';
import startBtnEvent from '../events/startBtnEvent.js';
import reset from '../events/resetEvent.js';
import randomBtnEvent from '../events/randomEvent.js';

const gameState = {
  players: null,

  initialize() {
    this.players = {
      player1: new Player1(),
      player2: new Player2(),
      comp: new Comp(),
    };

    // Set opponents
    this.players.player1.op = this.players.player2;
    this.players.player2.op = this.players.player1;

    // Initialize game components
    generateTable();
    addShips();
    startBtnEvent();
    reset();
    randomBtnEvent();
  },
};

export default gameState;
