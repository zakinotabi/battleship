export default function addEventsToCell(cell) {
  cell.addEventListener('click', () => {
    console.log(cell);
  });
}
