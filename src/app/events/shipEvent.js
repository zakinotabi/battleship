export default function addEventsToShips(ship) {
  ship.addEventListener('mousedown', () => {
    ship.classList.add('dragging');
    const stopDragging = () => {
      ship.classList.remove('dragging');
      ship.removeEventListener('mouseup', stopDragging);
    };

    window.addEventListener('mouseup', stopDragging);
  });

  ship.addEventListener('dragstart', (e) => {
    const draggedPart = e.target.closest('div').querySelector('.dragged-box');
    const shipBoxId = draggedPart?.getAttribute('data-segment');
    draggedPart?.classList.remove('dragged-box');
    const direction = ship.classList.contains('vertical') ? 'vertical' : 'horizontal';

    e.dataTransfer.setData(
      'shipDragged',
      JSON.stringify({
        name: ship.title,
        length: ship.getAttribute('ship-length'),
        shipId: ship.getAttribute('data-ship-id'),
        direction: direction,
        shipBoxId: shipBoxId,
      })
    );
  });

  ship.addEventListener('dragend', () => {
    ship.classList.remove('dragging');
  });
}
