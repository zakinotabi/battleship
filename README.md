# Battleship Game

A modern, interactive implementation of the classic Battleship board game built with JavaScript, HTML, and CSS. This web-based version features both single-player against AI and two-player modes with intuitive drag-and-drop ship placement.

## Screenshot

<div align="center">
    <img src="./doc/screenshots/Document 2025-09-16.png" alt="Logo" width="auto" height="auto">
</div>

## Features

- **Two Game Modes**: Play against AI or challenge a friend in multiplayer
- **Drag & Drop Interface**: Intuitive ship placement with visual feedback
- **Smart AI Opponent**: Computer uses strategic hunting algorithm to find and sink your ships (not ML)
- **Responsive Design**: Clean, modern UI that works on desktop and mobile devices
- **Visual Effects**: Hit/miss animations and interactive gameplay elements

## How to Play

1. **Place Your Ships**: Drag ships onto your game board in either horizontal or vertical orientation or press Random to randomly place them
2. **Ready**: Click "Ready" when ready to begin
3. **Take Turns**: Click on the opponent's grid to attack their ships
4. **Sink Ships**: First player to sink all opponent's ships wins!

## Technical Highlights

- **Vanilla JavaScript**: No external frameworks - pure JS implementation
- **Modular Architecture**: separation of concerns with dedicated modules for:
  - Game logic and state management
  - UI rendering and updates
  - Event handling
  - AI decision making
- **Jest Testing**: Comprehensive test suite covering game logic
- **Modern CSS**: Flexbox/Grid layout with smooth minimal animations

## AI Strategy

The computer opponent uses an intelligent hunting algorithm that:

- Starts with random attacks
- Switches to targeted search after first hit (search around)
- Follows pattern-based probing around successful hits until there is a miss in both ends
- Efficiently tracks it's play to know when to stop and start random attacks again

## Installation

[live preview](https://zakinotabi.github.io/battleship/)
