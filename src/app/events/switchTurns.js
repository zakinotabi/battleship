import { addBoardEvents, removeBoardEvents } from './boardEvent.js';

export default function switchTurns(toPlayer) {
  const activeBoard = document.querySelector(`.player${toPlayer.op.id}-container table`);
  const inactiveBoard = document.querySelector(`.player${toPlayer.id}-container table`);
  const gameDirection = document.querySelector(`.game-direction`);
  gameDirection.style.opacity = '1';
  gameDirection.classList.toggle('flipped');
  activeBoard.classList.add('under-attack');
  inactiveBoard.classList.remove('under-attack');

  removeBoardEvents(inactiveBoard);
  addBoardEvents(activeBoard, toPlayer.op);
}
