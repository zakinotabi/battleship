export default function addEventsToShips(ship) {
  ship.addEventListener('dragstart', () => {
    ship.classList.add('dragging');
    console.log(ship.classList);
  });

  ship.addEventListener('dragend', () => {
    ship.classList.remove('dragging');
  });
}
