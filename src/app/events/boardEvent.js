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
  board._clickHandler = handler;
}

export function removeBoardEvents(board) {
  if (board._clickHandler) {
    board.removeEventListener('click', board._clickHandler);
    delete board._clickHandler;
  }
}
