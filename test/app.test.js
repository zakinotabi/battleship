// Mock CSS first
jest.mock('../src/styles.css', () => ({}));

// Mock the initializePlayers module
jest.mock('../src/app/init/initializePlayers', () => ({
  initialize: jest.fn(),
}));

// Import the mocked module
import gameState from '../src/app/init/initializePlayers';

describe('Game Initialization', () => {
  beforeEach(() => {
    gameState.initialize.mockClear();
  });

  test('should call initialize when main module loads', () => {
    require('../src/app.js');

    expect(gameState.initialize).toHaveBeenCalledTimes(1);
  });

  test('CSS import should not cause errors', () => {
    expect(() => {
      require('../src/app.js');
    }).not.toThrow();
  });
});
