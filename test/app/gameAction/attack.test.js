import attack from '../../../src/app/gameAction/attack';

jest.mock('../../../src/app/gameAction/attack/miss', () => jest.fn());
jest.mock('../../../src/app/gameAction/attack/hit', () => jest.fn());
jest.mock('../../../src/app/events/switchTurns', () => jest.fn());

import miss from '../../../src/app/gameAction/attack/miss';
import hit from '../../../src/app/gameAction/attack/hit';
import switchTurns from '../../../src/app/events/switchTurns';

describe('attack function', () => {
  let mockCell;

  beforeEach(() => {
    jest.clearAllMocks();
    mockCell = { dataset: { index: '10' } };
  });

  test('MISS: should return "miss" and call miss() and switchTurns() with opponent', () => {
    const opp1 = { gameboard: Array(100).fill('.') };

    // Call the actual miss implementation when the mock is called
    miss.mockImplementation((cell, opp) => {
      switchTurns(opp);
    });

    expect(attack(mockCell, opp1)).toBe('miss');
    expect(miss).toHaveBeenCalledWith(mockCell, opp1);
    expect(switchTurns).toHaveBeenCalledWith(opp1);
    expect(hit).not.toHaveBeenCalled();
  });

  // Test hit
  test('HIT: should return "hit" and call hit() when cell has a ship', () => {
    const opp2 = { gameboard: Array(100).fill('.') };
    opp2.gameboard[10] = '3';
    expect(attack(mockCell, opp2)).toBe('hit');
    expect(hit).toHaveBeenCalled();
    expect(miss).not.toHaveBeenCalled();
    expect(switchTurns).not.toHaveBeenCalled();
  });

  // Test ALREADY ATTACKED
  test('ALREADY ATTACKED: should return false when cell is already hit', () => {
    const opponent = { gameboard: Array(100).fill('.') };
    opponent.gameboard[10] = 'hit'; // Already hit marker

    const result = attack(mockCell, opponent);

    expect(result).toBe(false);
    expect(miss).not.toHaveBeenCalled();
    expect(hit).not.toHaveBeenCalled();
  });

  test('ALREADY ATTACKED: should return false when cell is already missed', () => {
    const opponent = { gameboard: Array(100).fill('.') };
    opponent.gameboard[10] = 'miss'; // Already missed marker

    const result = attack(mockCell, opponent);

    expect(result).toBe(false);
    expect(miss).not.toHaveBeenCalled();
    expect(hit).not.toHaveBeenCalled();
  });
});
