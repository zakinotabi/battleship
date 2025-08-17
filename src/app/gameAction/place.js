import placeShipsUi from '../UI/placingShipsUI.js';

function updateBoard(board, startCoord, direction, ship) {
  for (let i = 0; i < ship.length; i++) {
    const idx = direction === 'horizontal' ? startCoord + i : startCoord + i * 10;
    board[idx] = ship.id;
  }
}

function updateUi(startCoord, direction, ship, cell) {
  placeShipsUi(startCoord, direction, ship, cell);
}

export default function place(player, ship, startCoord, direction, cell) {
  const board = player.gameboard;
  console.log('🚀 ~ place ~ player.id:', player.id);
  if (player.id === 3) {
    updateBoard(board, startCoord, direction, ship);
  } else {
    updateBoard(board, startCoord, direction, ship);
    updateUi(startCoord, direction, ship, cell);
  }
}
