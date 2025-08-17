import createUiElement from './createUtilsUI.js';
export default function showWinner(player) {
  const playerName = player.id === 1 ? document.querySelector(`.player${player.id}-name`).value : document.querySelector(`.player2-name`).value;
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
