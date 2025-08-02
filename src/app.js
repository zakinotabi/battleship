import attack from './app/attack.js';
import gameboard from './app/gameboard.js';
import shipsArray from './app/ships.js';

gameboard.place(shipsArray[1], 1);
attack(1);
gameboard.display();
