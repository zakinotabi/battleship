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

  const playerContainer1 = document.querySelector('.player1-container');
  const playerContainer2 = document.querySelector('.player2-container');

  if (player.id === 1) {
    player.gameboard.forEach((cell, index) => {
      if (!isNaN(cell)) {
        let cellUi = playerContainer1.querySelector(`[data-index="${index}"]`);
        cellUi.classList.add(`ship-place-${cell}`);
      }
    });
  } else {
    player.op.gameboard.forEach((cell, index) => {
      if (!isNaN(cell)) {
        let cellUi = playerContainer2.querySelector(`[data-index="${index}"]`);
        cellUi.classList.add(`ship-place-${cell}`);
      }
    });
  }

  winnerBox.append(close);

  container.appendChild(winnerBox);
}
