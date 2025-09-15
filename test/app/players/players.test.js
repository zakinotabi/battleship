import Player1 from '../../../src/app/players/player1';
import Player2 from '../../../src/app/players/player2';
import Comp from '../../../src/app/players/comp';

//test data
const expectedShips = [
  { id: 0, name: 'Destroyer', length: 3, hit: 0, sunk: false },
  { id: 1, name: 'Submarine', length: 4, hit: 0, sunk: false },
  { id: 2, name: 'Battleship', length: 5, hit: 0, sunk: false },
  { id: 3, name: 'Patrol Boat', length: 2, hit: 0, sunk: false },
];

describe('Player Classes', () => {
  describe('Common Properties and Methods', () => {
    const players = [
      { class: Player1, name: 'Player1', id: 1 },
      { class: Player2, name: 'Player2', id: 2 },
      { class: Comp, name: 'Computer', id: 3 },
    ];

    players.forEach(({ class: PlayerClass, name: className, id: expectedId }) => {
      describe(className, () => {
        let player;

        beforeEach(() => {
          player = new PlayerClass();
        });

        test(`should have correct id for ${className}`, () => {
          expect(player.id).toBe(expectedId);
        });

        test(`should have 100-cell gameboard for ${className}`, () => {
          expect(player.gameboard).toHaveLength(100);
          expect(player.gameboard.every((cell) => cell === '.')).toBe(true);
        });

        test(`should have correct ships configuration for ${className}`, () => {
          expect(player.ships).toEqual(expectedShips);
        });

        test(`should have undefined op property initially for ${className}`, () => {
          expect(player.op).toBeUndefined();
        });

        test(`reset() should restore initial state for ${className}`, () => {
          // Modify state
          player.gameboard[0] = 'hit';
          player.ships[0].hit = 2;
          player.ships[0].sunk = true;

          player.reset();

          // Verify reset
          expect(player.gameboard.every((cell) => cell === '.')).toBe(true);
          expect(player.ships).toEqual(expectedShips);
        });
      });
    });
  });

  describe('Unique Properties', () => {
    test('Player1 should have correct name', () => {
      const player = new Player1();
      expect(player.name).toBe('player1');
    });

    test('Player2 should have correct name', () => {
      const player = new Player2();
      expect(player.name).toBe('player 2');
    });

    test('Comp should have correct name', () => {
      const player = new Comp();
      expect(player.name).toBe('Computer');
    });
  });
});
