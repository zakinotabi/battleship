import attack from '../gameAction/attack.js';

export default class Player1 {
  constructor() {
    this.id = 1;
    this.name = 'player1';
    this.gameboard = Array(100).fill('.');
    this.op;
    this.ships = [
      { id: 0, name: 'Destroyer', length: 3, hit: 0, sunk: false },
      { id: 1, name: 'Submarine', length: 4, hit: 0, sunk: false },
      { id: 2, name: 'Battleship', length: 5, hit: 0, sunk: false },
      { id: 3, name: 'Patrol Boat', length: 2, hit: 0, sunk: false },
    ];
  }

  attack(coord) {
    return attack(coord, this.op);
  }
}
