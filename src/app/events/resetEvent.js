import startBtnEvent from './startBtnEvent';
import { removeFinishBtnEvent } from './readyBtnEvent';

export default function reset(player1, player2, comp) {
  const resetBtn = document.querySelector('.restart-btn');
  const cells = document.querySelectorAll('td');
  const gameDirection = document.querySelector('.game-direction');
  const ships = document.querySelectorAll('.ship');
  const finishBtn = document.querySelectorAll('.finish');
  const startBtn = document.querySelectorAll('.start');
  const shipContainerP1 = document.getElementById('ships-container1');
  const shipContainerP2 = document.getElementById('ships-container2');
  const emojiP1 = document.querySelector('.emoji-p1');
  const emojiP2 = document.querySelector('.emoji-p2');
  const playerContainer1 = document.querySelector('.player1-container');
  const playerContainer2 = document.querySelector('.player2-container');
  resetBtn.addEventListener('click', () => {
    player1.reset();
    player2.reset();
    comp.reset();
    cells.forEach((cell) => {
      cell.classList.remove('ship-place', 'hit', 'miss');
    });
    ships.forEach((ship) => {
      ship.classList.remove('dropped');
      ship.draggable = 'true';
      ship.style.opacity = '1';
    });
    finishBtn.forEach((finish) => {
      finish.style.display = 'none';
      finish.textContent = 'Start Placing your ships';
      finish.classList.remove('ready');
      finish.style.background = 'white';
      removeFinishBtnEvent(finish);
    });
    startBtn.forEach((start) => {
      start.style.display = 'block';
    });
    gameDirection.style.opacity = '0';
    gameDirection.classList.remove('flipped');
    shipContainerP1.style.filter = 'blur(25px)';
    shipContainerP2.style.filter = 'blur(25px)';
    emojiP1.style.display = 'none';
    emojiP2.style.display = 'none';
    playerContainer1.style.filter = 'blur(0px)';
    playerContainer2.style.filter = 'blur(0px)';
    startBtnEvent();
  });
}
