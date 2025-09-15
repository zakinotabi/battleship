import gameState from '../init/initializePlayers';
import { tryPlaceShip } from './randomEvent';
const compBtn = document.getElementById('computer');

export default function compBtnEvent() {
  const player1 = gameState.players.player1;
  const comp = gameState.players.comp;
  const startBtn2 = document.querySelector('.start-btn2');
  const playerContainer2 = document.querySelector('.player2-container');
  const activeBoard2 = playerContainer2.querySelector('table');
  const shipContainerP2 = document.getElementById('ships-container2');
  const playerName = document.querySelector(`.player2-name`);
  const finishBtn = playerContainer2.querySelector('.finish-btn2');
  const emojiP2 = document.querySelector('.emoji-p2');

  compBtn.addEventListener('click', () => {
    compBtn.classList.add('selected-mode');
    document.getElementById('multiplayer').classList.remove('selected-mode');
    player1.op = comp;
    comp.op = player1;
    startBtn2.style.display = 'none';
    shipContainerP2.style.display = 'none';
    emojiP2.style.display = 'none';
    playerName.value = 'Computer';
    finishBtn.classList.add('ready');
    for (let i = 0; i < comp.ships.length; i++) {
      tryPlaceShip(comp, i, activeBoard2);
    }
  });
}
