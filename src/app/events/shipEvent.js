export default function addEventsToShips(ship) {
  ship.addEventListener('dragstart', (e) => {
    ship.classList.add('dragging');
    e.dataTransfer.setData(
      'shipDragged',
      JSON.stringify({
        name: ship.title,
        length: ship.getAttribute('ship-length'),
        shipId: ship.getAttribute('data-ship-id'),
      })
    );
  });

  ship.addEventListener('dragend', () => {
    ship.classList.remove('dragging');
  });
}
