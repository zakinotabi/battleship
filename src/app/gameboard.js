export default class gameboard {
  static gameboardArr = Array(100).fill('.');

  static set(newBoard) {
    this.gameboardArr = [...newBoard]; // Store a copy
  }

  static place(ship, coordinates) {
    const board = this.gameboardArr;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < ship.length; i++) {
      board[coordinates] = ship.id;
      coordinates++;
    }

    this.set(board);
  }
  static display() {
    console.log('   A B C D E F G H I J');
    for (let row = 0; row < 10; row++) {
      let rowStr = `${row} `;
      for (let col = 0; col < 10; col++) {
        const index = row * 10 + col;
        rowStr += this.gameboardArr[index] + ' ';
      }
      console.log(rowStr);
    }
  }
}
