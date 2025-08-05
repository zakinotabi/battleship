import addEventsToCell from '../events/cellEvent';

export default function generateTable(player1, player2) {
  const grid1 = document.querySelector('.grid-1');
  const grid2 = document.querySelector('.grid-2');

  function makeTable(boardNumber) {
    const table = document.createElement('table');
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('td');
      // cell.classList.add('drop-hover');
      cell.dataset.index = i;
      cell.dataset.gameboard = boardNumber;
      addEventsToCell(cell, player1, player2);
      table.appendChild(cell);
    }
    return table;
  }
  `1`;
  grid1.appendChild(makeTable(1));
  grid2.appendChild(makeTable(2));
}
