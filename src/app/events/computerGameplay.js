import attack from '../gameAction/attack';
import gameState from '../init/initializePlayers';

let hit = null;
let firstHitCoords = null;
let hitCounter = 0;
let missCounter = 0;
let counter = 0;
const positions = [1, -1, 10, -10];
let availableSpots = [...Array(100).keys()];

export default function computerPlay() {
  const comp = gameState.players.comp;
  const activeBoard = document.querySelector(`.player1-container table`);

  if (missCounter > 3) {
    counter = 0;
    hit = null;
    firstHitCoords = null;
    hitCounter = 0; // Reset hitCounter here too for consistency
  }

  setTimeout(() => {
    if (hit) {
      let newCoords = hit + positions[counter];

      // Skip invalid coords (boundary/edge cross)
      if ((hit % 10 === 9 && positions[counter] === 1) || (hit % 10 === 0 && positions[counter] === -1) || newCoords > 99 || newCoords < 0) {
        counter++;
        missCounter++;
        computerPlay();
        return;
      }

      // Skip if already attacked (prevent bad splice and unnecessary attack)
      if (!availableSpots.includes(newCoords)) {
        missCounter++;
        counter++;
        computerPlay();
        return;
      }

      const cell = activeBoard.querySelector(`[data-index="${newCoords}"]`);
      const result = attack(cell, comp.op);

      //Only splice on valid hit/miss
      if (result === 'hit' || result === 'miss') {
        availableSpots.splice(availableSpots.indexOf(newCoords), 1);
      }

      if (result === 'miss' && hitCounter === 0) {
        missCounter++;
        counter++;
      } else if (result === 'miss' && hitCounter !== 0) {
        missCounter++;
        hit = firstHitCoords;
        if (counter === 0 || counter === 2) {
          counter++;
        } else {
          counter--;
        }
      } else if (result === 'hit') {
        hit = newCoords;
        hitCounter++;
        computerPlay();
      }
      // else if (result === 'sunk') {
      //   // Handle if attack returns 'sunk' (reset hunt, recurse if variant allows another turn)
      //   hit = null;
      //   firstHitCoords = null;
      //   hitCounter = 0;
      //   missCounter = 0;
      //   counter = 0;
      //   computerPlay();
      // }
      else if (!result) {
        missCounter++;
        counter++;
        computerPlay();
      }
    } else {
      missCounter = 0;

      //Handle empty spots (game should end externally, but prevent crash)
      if (availableSpots.length === 0) {
        return;
      }

      const randomIndex = Math.floor(Math.random() * availableSpots.length);
      const attackCoord = availableSpots[randomIndex];
      const cell = activeBoard.querySelector(`[data-index="${attackCoord}"]`);
      const result = attack(cell, comp.op);

      // Only splice on valid hit/miss
      if (result === 'hit' || result === 'miss') {
        availableSpots.splice(randomIndex, 1);
      }

      if (result === 'hit') {
        hit = attackCoord;
        firstHitCoords = attackCoord;
        hitCounter = 0; // Reset hitCounter for new hunt
        computerPlay();
      } else if (result === 'sunk') {
        // Rare for random, but handle
        hit = null;
        firstHitCoords = null;
        hitCounter = 0;
        missCounter = 0;
        counter = 0;
        computerPlay();
      } else if (!result) {
        computerPlay();
      }
    }
  }, 500);
}
