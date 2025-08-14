import createUiElement from './createUtilsUI.js';
export default function showWinner(player) {
  const playerName = document.querySelector(`.player${player.id}-name`).value;
  const winnerBox = createUiElement('div', 'winnerBox', `${playerName} Won!`);
  const container = document.querySelector('.container');
  const close = createUiElement('button', 'close-btn', '×', null, {
    click: () => {
      winnerBox.style.display = 'none';
    },
  });
  winnerBox.append(close);

  container.appendChild(winnerBox);
}
