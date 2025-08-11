import finishBtnEvent from '../events/readyBtnEvent';

export default function updateFinishBtn(player) {
  const container = document.getElementById(`ships-container${player.id}`);
  const numberOfShipsDropped = container.querySelectorAll('.dropped');
  const finishButton = document.querySelector(`.finish-btn${player.id}`);

  if (numberOfShipsDropped.length === player.ships.length) {
    finishButton.textContent = 'Ready';
    finishButton.style.background = 'rgb(97, 255, 181)';
    finishBtnEvent(finishButton, player);
  } else {
    finishBtnEvent(finishButton, player);
    finishButton.textContent = `You have ${player.ships.length - numberOfShipsDropped.length} more ships to place`;
  }
}
