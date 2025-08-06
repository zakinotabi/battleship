export default function addEventsToShipBox(box) {
  box.addEventListener('mousedown', () => {
    box.classList.add('dragged-box');
  });

  box.addEventListener('mouseup', () => {
    box.classList.remove('dragged-box');
  });
}
