import switchTurns from '../events/switchTurns';

export default function miss(coordinates, player) {
  const board = player.gameboard;
  board[coordinates] = 'miss';
  switchTurns(player);
}
