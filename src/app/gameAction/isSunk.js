import showWinner from '../UI/showWinner';

export default function isSunk(player) {
  const ships = player.ships;
  let sunkCount;

  for (let i = 0; i < ships.length; i++) {
    if (!ships[i].sunk) {
      return;
    }
    sunkCount = i;
  }
  if (ships.length === sunkCount + 1) {
    showWinner(player.op);
  }
}
