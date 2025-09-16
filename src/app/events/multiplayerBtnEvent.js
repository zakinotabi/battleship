import gameState from '../init/initializePlayers';
import reset from '../events/resetEvent';

const multiplayerBtn = document.getElementById('multiplayer');

export default function multiplayerBtnEvent() {
  const player1 = gameState.players.player1;
  const player2 = gameState.players.player2;
  const startBtn2 = document.querySelector('.start-btn2');
  const playerContainer2 = document.querySelector('.player2-container');
  const shipContainerP2 = document.getElementById('ships-container2');
  const playerName = document.querySelector(`.player2-name`);
  const finishBtn = playerContainer2.querySelector('.finish-btn2');
  const computerBtn = document.getElementById('computer');

  multiplayerBtn.classList.add('selected-mode');
  multiplayerBtn.addEventListener('click', () => {
    reset();
    multiplayerBtn.classList.add('selected-mode');
    computerBtn.classList.remove('selected-mode');
    computerBtn.style.pointerEvents = 'auto';
    player1.op = player2;
    player2.op = player1;
    startBtn2.style.display = 'block';
    shipContainerP2.style.display = 'grid';
    playerName.value = player2.name;
    finishBtn.classList.remove('ready');
    multiplayerBtn.style.pointerEvents = 'none';
  });
}
