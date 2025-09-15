import startBtnEvent from './startBtnEvent';
import { removeFinishBtnEvent } from './readyBtnEvent';
import hideShipsFromTable from '../UI/hideShipsFromTableUI';
import gameState from '../init/initializePlayers';
import { removeBoardEvents } from './boardEvent';

export default function reset() {
  const player1 = gameState.players.player1;
  const player2 = gameState.players.player2;
  const comp = gameState.players.comp;

  const resetBtn = document.querySelector('.restart-btn');
  const gameDirection = document.querySelector('.game-direction');
  const ships = document.querySelectorAll('.ship');
  const finishBtn = document.querySelectorAll('.finish');
  const startBtn1 = document.querySelector('.start-btn1');
  const startBtn2 = document.querySelector('.start-btn2');

  const shipContainerP1 = document.getElementById('ships-container1');
  const shipContainerP2 = document.getElementById('ships-container2');
  const emojiP1 = document.querySelector('.emoji-p1');
  const emojiP2 = document.querySelector('.emoji-p2');
  const playerContainer1 = document.querySelector('.player1-container');
  const playerContainer2 = document.querySelector('.player2-container');
  const boards = document.querySelectorAll('table');
  const randomBtn = document.querySelectorAll('.random-btn');

  randomBtn.forEach((btn) => {
    btn.style.display = 'none';
  });

  resetBtn.addEventListener('click', () => {
    player1.reset();
    player2.reset();
    comp.reset();
    hideShipsFromTable(playerContainer1);
    hideShipsFromTable(playerContainer2);
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

    startBtn1.style.display = 'block';

    if (player1.op == player2) {
      startBtn2.style.display = 'block';
    } else {
      playerContainer2.querySelector('.finish').classList.add('ready');
    }

    gameDirection.style.opacity = '0';
    gameDirection.classList.remove('flipped');
    shipContainerP1.style.filter = 'blur(25px)';
    shipContainerP2.style.filter = 'blur(25px)';
    emojiP1.style.display = 'none';
    emojiP2.style.display = 'none';
    playerContainer1.style.filter = 'blur(0px)';
    playerContainer2.style.filter = 'blur(0px)';
    startBtnEvent();
    boards.forEach((board) => {
      removeBoardEvents(board);
      board.classList.remove('under-attack');
    });
  });
}
