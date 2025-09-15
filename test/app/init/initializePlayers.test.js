import gameState from '../../../src/app/init/initializePlayers';

// Mock all the dependencies
jest.mock('../../../src/app/players/player1', () => jest.fn());
jest.mock('../../../src/app/players/player2', () => jest.fn());
jest.mock('../../../src/app/players/comp', () => jest.fn());
jest.mock('../../../src/app/UI/generateTableUI', () => jest.fn());
jest.mock('../../../src/app/UI/createShipsUI', () => jest.fn());
jest.mock('../../../src/app/events/startBtnEvent', () => jest.fn());
jest.mock('../../../src/app/events/resetEvent', () => jest.fn());
jest.mock('../../../src/app/events/randomEvent', () => jest.fn());
jest.mock('../../../src/app/events/computerBtnEvent', () => jest.fn());
jest.mock('../../../src/app/events/multiplayerBtnEvent', () => jest.fn());

import Player1 from '../../../src/app/players/player1';
import Player2 from '../../../src/app/players/player2';
import Comp from '../../../src/app/players/comp';
import generateTable from '../../../src/app/UI/generateTableUI';
import addShips from '../../../src/app/UI/createShipsUI';
import startBtnEvent from '../../../src/app/events/startBtnEvent';
import reset from '../../../src/app/events/resetEvent';
import randomBtnEvent from '../../../src/app/events/randomEvent';
import compBtnEvent from '../../../src/app/events/computerBtnEvent';
import multiplayerBtnEvent from '../../../src/app/events/multiplayerBtnEvent';

describe('gameState.initialize()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize players and set opponents', () => {
    gameState.initialize();

    // Check that players were created
    expect(Player1).toHaveBeenCalledTimes(1);
    expect(Player2).toHaveBeenCalledTimes(1);
    expect(Comp).toHaveBeenCalledTimes(1);

    // Check that players object has the right structure
    expect(gameState.players).toHaveProperty('player1');
    expect(gameState.players).toHaveProperty('player2');
    expect(gameState.players).toHaveProperty('comp');

    // Check that opponents are set correctly
    expect(gameState.players.player1.op).toBe(gameState.players.player2);
    expect(gameState.players.player2.op).toBe(gameState.players.player1);
  });

  test('should initialize all game components', () => {
    gameState.initialize();

    // Check that all UI and event functions were called
    expect(generateTable).toHaveBeenCalledTimes(1);
    expect(addShips).toHaveBeenCalledTimes(1);
    expect(startBtnEvent).toHaveBeenCalledTimes(1);
    expect(reset).toHaveBeenCalledTimes(1);
    expect(randomBtnEvent).toHaveBeenCalledTimes(1);
    expect(compBtnEvent).toHaveBeenCalledTimes(1);
    expect(multiplayerBtnEvent).toHaveBeenCalledTimes(1);
  });
});
