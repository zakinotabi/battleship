import isSunk from '../../../src/app/gameAction/isSunk';

jest.mock('../../../src/app/UI/showWinner', () => jest.fn());
import showWinner from '../../../src/app/UI/showWinner';

describe('isSunk function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('does not call showWinner if any ship is not sunk', () => {
    const player = {
      ships: [{ sunk: true }, { sunk: false }],
      op: 'opponent',
    };

    isSunk(player);
    expect(showWinner).not.toHaveBeenCalled();
  });

  test('calls showWinner with opponent when all ships are sunk', () => {
    const player = {
      ships: [{ sunk: true }, { sunk: true }],
      op: 'theWinner',
    };

    isSunk(player);
    expect(showWinner).toHaveBeenCalledWith('theWinner');
  });
});
