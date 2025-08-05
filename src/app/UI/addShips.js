import addEventsToShips from '../events/shipEvent';

export default function addShips(player1, player2) {
  const container1 = document.getElementById('ships-container1');
  const container2 = document.getElementById('ships-container2');
  console.clear();

  function generateShipsForPlayer(player, container) {
    const ships = player.ships;

    ships.forEach((ship) => {
      const shipWrapper = document.createElement('div');
      const shipName = document.createElement('div');
      shipName.innerHTML = ship.name;
      shipName.className = 'ship-name';
      shipWrapper.className = `ship ship-${ship.id}`;
      shipWrapper.setAttribute('data-ship-id', ship.id);
      shipWrapper.setAttribute('ship-length', ship.length);
      shipWrapper.draggable = 'true';
      shipWrapper.title = ship.name;

      for (let i = 0; i < ship.length; i++) {
        const box = document.createElement('div');
        box.className = 'ship-part';
        box.setAttribute('data-segment', i);

        shipWrapper.appendChild(box);
      }
      addEventsToShips(shipWrapper);
      container.append(shipName, shipWrapper);
    });
  }

  generateShipsForPlayer(player1, container1);
  generateShipsForPlayer(player2, container2);
}
