export default function hideShipsFromTable(playerContainer) {
  const cells = playerContainer.querySelectorAll('td');
  cells.forEach((cell) => {
    cell.className = 'cell';
  });
}
