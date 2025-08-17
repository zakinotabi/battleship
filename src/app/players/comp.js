export default class Comp {
  constructor() {
    this.id = 3;
    this.name = 'Computer';
    this.gameboard = Array(100).fill('.');
    this.op;
    this.ships = [
      { id: 0, name: 'Destroyer', length: 3, hit: 0, sunk: false },
      { id: 1, name: 'Submarine', length: 4, hit: 0, sunk: false },
      { id: 2, name: 'Battleship', length: 5, hit: 0, sunk: false },
      { id: 3, name: 'Patrol Boat', length: 2, hit: 0, sunk: false },
    ];
  }

  reset() {
    this.gameboard = Array(100).fill('.');
    this.ships = [
      { id: 0, name: 'Destroyer', length: 3, hit: 0, sunk: false },
      { id: 1, name: 'Submarine', length: 4, hit: 0, sunk: false },
      { id: 2, name: 'Battleship', length: 5, hit: 0, sunk: false },
      { id: 3, name: 'Patrol Boat', length: 2, hit: 0, sunk: false },
    ];
  }
}
