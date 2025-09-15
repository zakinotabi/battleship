import place from '../../../src/app/gameAction/place';

// Mocking
jest.mock('../../../src/app/UI/placingShipsUI', () => jest.fn());
import placeShipsUi from '../../../src/app/UI/placingShipsUI';

describe('place function', () => {
  let mockPlayer;
  let mockShip;

  beforeEach(() => {
    jest.clearAllMocks();

    mockPlayer = {
      id: 1,
      gameboard: Array(100).fill('.'),
    };

    mockShip = {
      id: 2,
      length: 3,
    };
  });

  test('should update board for human player (id !== 3)', () => {
    const startCoord = 5;
    const direction = 'horizontal';
    const mockCell = {};

    place(mockPlayer, mockShip, startCoord, direction, mockCell);

    // Check board was updated
    expect(mockPlayer.gameboard[5]).toBe(2); // ship.id
    expect(mockPlayer.gameboard[6]).toBe(2);
    expect(mockPlayer.gameboard[7]).toBe(2);
    expect(mockPlayer.gameboard[8]).toBe('.'); // Should not be touched

    // Check UI was updated
    expect(placeShipsUi).toHaveBeenCalledWith(startCoord, direction, mockShip, mockCell);
  });

  test('should update board for computer player (id === 3) without UI', () => {
    mockPlayer.id = 3; // Computer player
    const startCoord = 15;
    const direction = 'vertical';

    place(mockPlayer, mockShip, startCoord, direction);

    // Check board was updated
    expect(mockPlayer.gameboard[15]).toBe(2); // ship.id
    expect(mockPlayer.gameboard[25]).toBe(2); // +10 (vertical)
    expect(mockPlayer.gameboard[35]).toBe(2); // +20
    expect(mockPlayer.gameboard[45]).toBe('.'); // Should not be touched

    // Check UI was NOT updated for computer
    expect(placeShipsUi).not.toHaveBeenCalled();
  });

  test('should handle horizontal placement correctly', () => {
    const startCoord = 0;
    const direction = 'horizontal';

    place(mockPlayer, mockShip, startCoord, direction);

    expect(mockPlayer.gameboard[0]).toBe(2);
    expect(mockPlayer.gameboard[1]).toBe(2);
    expect(mockPlayer.gameboard[2]).toBe(2);
  });

  test('should handle vertical placement correctly', () => {
    const startCoord = 10;
    const direction = 'vertical';

    place(mockPlayer, mockShip, startCoord, direction);

    expect(mockPlayer.gameboard[10]).toBe(2);
    expect(mockPlayer.gameboard[20]).toBe(2);
    expect(mockPlayer.gameboard[30]).toBe(2);
  });

  test('should not affect other board cells', () => {
    const startCoord = 50;
    const direction = 'horizontal';

    // Fill board with something first
    mockPlayer.gameboard = Array(100).fill('.');

    place(mockPlayer, mockShip, startCoord, direction);

    // Check only the targeted cells were changed
    expect(mockPlayer.gameboard[50]).toBe(2);
    expect(mockPlayer.gameboard[51]).toBe(2);
    expect(mockPlayer.gameboard[52]).toBe(2);
    expect(mockPlayer.gameboard[49]).toBe('.'); // Should remain unchanged
    expect(mockPlayer.gameboard[53]).toBe('.'); // Should remain unchanged
  });
});
