import attack from '../gameAction/attack';

export function boardClickHandler(player) {
  return function (e) {
    const cell = e.target.closest('td');
    if (!cell) return;
    attack(cell, player.op);
  };
}

export function addBoardEvents(board, player) {
  const handler = boardClickHandler(player);
  board.addEventListener('click', handler);
  console.log('🚀 ~ addBoardEvents ~ board:111111', board);
  board._clickHandler = handler;
}

export function removeBoardEvents(board) {
  if (board._clickHandler) {
    board.removeEventListener('click', board._clickHandler);
    console.log('🚀 ~ removeBoardEvents ~ board:2222', board);
    delete board._clickHandler;
  }
}
