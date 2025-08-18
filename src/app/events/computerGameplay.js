import attack from '../gameAction/attack';
import gameState from '../init/initializePlayers';
let lastHit;
let skipCounter;

export default function computerPlay(coord) {
  const comp = gameState.players.comp;
  const attackCoord = coord ?? Math.floor(Math.random() * 100);
  const activeBoard = document.querySelector(`.player1-container table`);
  const cell = activeBoard.querySelector(`[data-index="${attackCoord}"]`);

  //   if (!cell) return;
  if (lastHit) {
    if (attackCoord === lastHit + 1) {
      return play(attackCoord + 1);
      // return computerPlay(attackCoord + 1);
    }
    if (attackCoord === lastHit - 1) {
      return play(attackCoord - 1);
      // return computerPlay(attackCoord - 1);
    }
    if (attackCoord === lastHit + 10) {
      return play(attackCoord + 10);
      // return computerPlay(attackCoord + 10);
    }
    if (attackCoord === lastHit - 10) {
      return play(attackCoord - 10);
      // return computerPlay(attackCoord - 10);
    }
  } else {
    skipCounter = 0;
    play(attackCoord);
  }

  function play(coords) {
    if (!isNaN(comp.op.gameboard[coords])) {
      lastHit = coords;
      // if (skipCounter === 0) {
      //   skipCounter += 1;
      //   return computerPlay(coords + 1);
      // }
      // if (skipCounter === 1) {
      //   skipCounter += 1;
      //   return computerPlay(coords - 1);
      // }
      // if (skipCounter === 2) {
      //   skipCounter += 1;
      //   return computerPlay(coords + 10);
      // }
      // if (skipCounter === 3) {
      //   skipCounter += 1;
      //   return computerPlay(attackCoord - 10);
      // }
      setTimeout(() => {
        attack(cell, comp.op);
        coords === 99 ? (coords -= 1) : coords;
        computerPlay(coords + 1);
      }, 500);
    } else if (comp.op.gameboard[coords] === 'hit' || comp.op.gameboard[coords] === 'miss') {
      computerPlay();
    } else if (comp.op.gameboard[coords] === '.') {
      setTimeout(() => {
        attack(cell, comp.op);
      }, 500);
      // attack(cell, comp.op);
    }
  }
}
