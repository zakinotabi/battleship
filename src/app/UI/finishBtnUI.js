import finishBtnEvent from '../events/finishBtnEvent';

export default function updateFinishBtn(player) {
  const container = document.getElementById(`ships-container${player.id}`);
  const numberOfShipsDropped = container.querySelectorAll('.dropped');
  const finishButton = document.querySelector(`.finish-btn${player.id}`);

  if (numberOfShipsDropped.length === player.ships.length) {
    finishButton.textContent = 'Ready';
    finishBtnEvent(finishButton, player);
  } else {
    finishButton.textContent = `You have ${player.ships.length - numberOfShipsDropped.length} more ships to place`;
  }
}
