import attack from '../gameAction/attack';
import gameState from '../init/initializePlayers';

export default function computerPlay(coord) {
  const comp = gameState.players.comp;
  const attackCoord = coord ?? Math.floor(Math.random() * 100);
  const activeBoard = document.querySelector(`.player1-container table`);
  const cell = activeBoard.querySelector(`[data-index="${attackCoord}"]`);

  //   if (!cell) return;
  if (!isNaN(comp.op.gameboard[attackCoord])) {
    attack(cell, comp.op);
    attackCoord === 99 ? (attackCoord -= 1) : attackCoord;
    computerPlay(attackCoord + 1);
  } else if (comp.op.gameboard[attackCoord] === 'hit' || comp.op.gameboard[attackCoord] === 'miss') {
    computerPlay();
  } else if (comp.op.gameboard[attackCoord] === '.') {
    attack(cell, comp.op);
  }
}
