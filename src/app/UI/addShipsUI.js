import addEventsToShips from '../events/shipEvent.js';
import createElement from './utilsUI.js';
import addEventsToShipBox from '../events/shipBoxesEvent.js';

export default function addShips(player1, player2) {
  const container1 = document.getElementById('ships-container1');
  const container2 = document.getElementById('ships-container2');
  console.clear();

  function generateShipsForPlayer(player, container) {
    const ships = player.ships;

    ships.forEach((ship) => {
      const shipWrapper = createElement(
        'div',
        `ship ship-${ship.id} horizontal`,
        null,
        { 'data-ship-id': ship.id, 'ship-length': ship.length, draggable: true, title: ship.name },
        null
      );
      const shipNameAndRotate = createElement('div', 'ship-name', ship.name);
      const rotateBtn = createElement('button', 'rotate', '↺', null, {
        click: () => {
          shipWrapper.classList.toggle('vertical');
          shipWrapper.classList.toggle('horizontal');
        },
      });
      shipNameAndRotate.appendChild(rotateBtn);
      for (let i = 0; i < ship.length; i++) {
        const box = createElement('div', 'ship-part', null, { 'data-segment': i });
        addEventsToShipBox(box);
        shipWrapper.appendChild(box);
      }
      addEventsToShips(shipWrapper);
      container.append(shipNameAndRotate, shipWrapper);
    });
  }

  generateShipsForPlayer(player1, container1);
  generateShipsForPlayer(player2, container2);
}
