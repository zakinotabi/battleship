import attack from '../attack.js';
import place from '../place.js';

export default class Player2 {
  constructor() {
    this.name = 'player2';
    this.gameboard = Array(100).fill('.');
    this.op;
    this.ships = [
      { id: 0, name: 'Destroyer', length: 3, hit: 0, sunk: false },
      { id: 1, name: 'Submarine', length: 4, hit: 0, sunk: false },
      { id: 2, name: 'Battleship', length: 5, hit: 0, sunk: false },
      { id: 3, name: 'Patrol Boat', length: 2, hit: 0, sunk: false },
    ];
  }

  place(shipId, coord) {
    return place(this.ships[shipId], coord, this.gameboard);
  }

  attack(coord) {
    return attack(coord, this.op);
  }
}
