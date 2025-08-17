import { addBoardEvents, removeBoardEvents } from './boardEvent.js';
import computerPlay from './computerGameplay.js';

export default function switchTurns(toPlayer) {
  let activeBoard;
  let inactiveBoard;

  if (toPlayer.id === 1) {
    activeBoard = document.querySelector(`.player2-container table`);
    inactiveBoard = document.querySelector(`.player1-container table`);
  } else {
    activeBoard = document.querySelector(`.player1-container table`);
    inactiveBoard = document.querySelector(`.player2-container table`);
  }

  const gameDirection = document.querySelector(`.game-direction`);
  gameDirection.style.opacity = '1';
  gameDirection.classList.toggle('flipped');
  activeBoard.classList.add('under-attack');
  inactiveBoard.classList.remove('under-attack');

  removeBoardEvents(inactiveBoard);
  addBoardEvents(activeBoard, toPlayer);
  if (toPlayer.id === 3) {
    computerPlay();
  }
}
