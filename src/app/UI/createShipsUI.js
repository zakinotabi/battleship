import addEventsToShips from '../events/shipEvent.js';
import createUiElement from './createUtilsUI.js';
import addEventsToShipBox from '../events/shipBoxesEvent.js';

export default function addShips(player1, player2) {
  const container1 = document.getElementById('ships-container1');
  const container2 = document.getElementById('ships-container2');
  console.clear();

  function generateShipsForPlayer(player, container) {
    const ships = player.ships;

    ships.forEach((ship) => {
      // create element with function
      const shipWrapper = createUiElement(
        'div',
        `ship ship-${ship.id} horizontal`,
        null,
        { 'data-ship-id': ship.id, 'ship-length': ship.length, draggable: true, title: ship.name },
        null
      );
      // create element with function
      const shipNameAndRotate = createUiElement('div', 'ship-name', ship.name);
      // create element with function
      const rotateBtn = createUiElement('button', 'rotate', '↻', null, {
        click: () => {
          shipWrapper.classList.toggle('vertical');
          shipWrapper.classList.toggle('horizontal');
        },
      });
      shipNameAndRotate.appendChild(rotateBtn);
      for (let i = 0; i < ship.length; i++) {
        // create element with function
        const box = createUiElement('div', 'ship-part', null, { 'data-segment': i });
        // add event with function
        addEventsToShipBox(box);
        shipWrapper.appendChild(box);
      }
      // add event with function
      addEventsToShips(shipWrapper);
      container.append(shipNameAndRotate, shipWrapper);
    });
  }

  generateShipsForPlayer(player1, container1);
  generateShipsForPlayer(player2, container2);
}
