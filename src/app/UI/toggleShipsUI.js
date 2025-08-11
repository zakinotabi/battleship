export default function toggleShips(playerContainer) {
  const ships = playerContainer.querySelectorAll('.ship-place');
  ships.forEach((cell) => {
    cell.classList.toggle('ship-place');
    cell.classList.length || cell.removeAttribute('class');
  });
}
