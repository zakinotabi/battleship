export default function switchTurns(player) {
  // Remove attacking class and events from deactivated board

  if (player.id === 1) {
    const activeBoard = document.querySelector('.player1-container');
    const deactivateBoard = document.querySelector('.player2-container');
    editEvents(activeBoard, deactivateBoard);
  } else {
    const deactivateBoard = document.querySelector('.player1-container');
    const activeBoard = document.querySelector('.player2-container');
    editEvents(activeBoard, deactivateBoard);
  }
  function editEvents(activeBoard, deactivateBoard) {
    const deactivatedCells = deactivateBoard.querySelectorAll('td');
    deactivatedCells.forEach((cell) => {
      cell.classList.remove('attacking');
      cell.replaceWith(cell.cloneNode(true));
    });

    const activatedCells = activeBoard.querySelectorAll('td');
    activatedCells.forEach((cell) => {
      cell.classList.add('attacking');
    });
  }
}
