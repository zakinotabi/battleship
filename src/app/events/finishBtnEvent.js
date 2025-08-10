import toggleShips from '../UI/toggleShipsUI';
import addEventsToCell from './cellEvent';
import switchTurns from './switchTurns';

export default function finishBtnEvent(finishBtn, player) {
  const playerContainer1 = document.querySelector('.player1-container');
  const playerContainer2 = document.querySelector('.player2-container');
  const emojiP1 = document.querySelector('.emoji-p1');
  const emojiP2 = document.querySelector('.emoji-p2');

  finishBtn.addEventListener('click', () => {
    finishBtn.classList.add('ready');
    const everyoneReady = document.querySelectorAll('.ready');
    if (everyoneReady.length === 2) {
      activateAttack();
      playerContainer1.style.filter = 'blur(0px)';
      playerContainer2.style.filter = 'blur(0px)';
      emojiP1.style.display = 'none';
      emojiP2.style.display = 'none';
      finishBtn.style.display = 'none';

      player.id === 1 ? [toggleShips(playerContainer1), switchTurns(player.op)] : [toggleShips(playerContainer2), switchTurns(player)];
      return;
    }

    if (player.id === 1) {
      emojiP2.style.display = 'none';
      playerContainer2.style.filter = 'blur(0px)';
      playerContainer1.style.filter = 'blur(25px)';
      toggleShips(playerContainer1);
      finishBtn.style.display = 'none';
    } else {
      emojiP1.style.display = 'none';
      playerContainer2.style.filter = 'blur(25px)';
      playerContainer1.style.filter = 'blur(0px)';
      toggleShips(playerContainer2);
      finishBtn.style.display = 'none';
    }
  });

  function activateAttack() {
    const uiBoardCellsP1 = playerContainer1.querySelectorAll('td');
    const uiBoardCellsP2 = playerContainer2.querySelectorAll('td');
    uiBoardCellsP1.forEach((cell) => {
      cell.classList.add('attacking');
      addEventsToCell.attack(cell, player, player.op);
      // toggleShips(playerContainer1);
    });
    uiBoardCellsP2.forEach((cell) => {
      cell.classList.add('attacking');
      addEventsToCell.attack(cell, player.op, player);
      // toggleShips(playerContainer2);
    });
  }
}
