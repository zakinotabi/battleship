import miss from './miss.js';
import gameboard from './gameboard.js';
import hit from './hit.js';

export function attack(coordinates) {
  if (gameboard[coordinates] === '.') {
    miss(coordinates);
  }
  // eslint-disable-next-line no-restricted-globals
  else if (!isNaN(gameboard[coordinates])) {
    hit(coordinates);
  }
}
