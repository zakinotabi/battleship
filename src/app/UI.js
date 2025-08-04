import addEventsToCell from './events';
// import Player1 from './players/player1';
// import Player2 from './players/player2';
// import Comp from './players/comp';

export default function generateTable() {
  const grid1 = document.querySelector('.grid-1');
  const grid2 = document.querySelector('.grid-2');

  function makeTable(boardNumber) {
    const table = document.createElement('table');
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('td');
      cell.dataset.index = i;
      cell.dataset.gameboard = boardNumber;
      addEventsToCell(cell);
      table.appendChild(cell);
    }
    return table;
  }

  grid1.appendChild(makeTable(1));
  grid2.appendChild(makeTable(2));
}

export function addShips(player) {
  const containers = document.querySelectorAll('#ships-container');

  console.clear();
  // container.innerHTML = '';
  const ships = player.ships;
  containers.forEach((container) => {
    ships.forEach((ship) => {
      const shipWrapper = document.createElement('div');
      const shipName = document.createElement('div');
      shipName.innerHTML = ship.name;
      shipName.className = 'ship-name';
      shipWrapper.className = `ship ship-${ship.id}`;
      shipWrapper.draggable = 'true';
      shipWrapper.title = ship.name;

      for (let i = 0; i < ship.length; i++) {
        const box = document.createElement('div');
        box.className = 'ship-part';
        box.setAttribute('data-ship-id', ship.id);
        box.setAttribute('data-segment', i);

        shipWrapper.appendChild(box);
      }

      container.append(shipName, shipWrapper);
    });
  });
}

export function updateUi(op, placeElement) {
  const index = placeElement.dataset.index;

  if (op.gameboard[index] === 'hit') {
    placeElement.style.backgroundColor = 'red';
  }
  if (op.gameboard[index] === 'miss') {
    placeElement.style.backgroundColor = 'blue';
  }
}
