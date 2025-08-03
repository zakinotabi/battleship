export default function place(ship, coordinates, gameboard) {
  const board = gameboard;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ship.length; i++) {
    board[coordinates] = ship.id;
    coordinates++;
  }
}
// static display() {
//   for (let row = 0; row < 10; row++) {
//     let rowStr = `${row} `;
//     for (let col = 0; col < 10; col++) {
//       const index = row * 10 + col;
//       rowStr += this.gameboardArr[index] + ' ';
//     }
//     console.log(rowStr);
//   }
// }
