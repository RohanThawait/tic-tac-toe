# Tic-Tac-Toe: A Classic Game Built with Modern JavaScript

A classic, interactive Tic-Tac-Toe game built from the ground up with vanilla JavaScript, HTML5, and CSS3. This project demonstrates core front-end development principles like DOM manipulation, event handling, and game state management.

### [**Live Demo**](https://rohanthawait.github.io/tic-tac-toe/)


!(https://github.com/RohanThawait/tic-tac-toe/blob/bc24a66a6f77287bd7d4fbcc515a72f3c0482192/tic-tac-toe.gif)

-----

## Project Overview

The goal of this project was to solidify foundational web development skills by building a well-known game without relying on any external frameworks or libraries. The focus was on writing clean, modular, and efficient JavaScript to handle all the game logic, player turns, and win-condition checking. The user interface is designed to be clean, intuitive, and fully responsive across various screen sizes.

-----

## Features

  * **Interactive Gameplay**: Click on any open square to place your mark (X or O).
  * **Win Detection**: The game automatically detects and announces when a player has won. 
  * **Draw Detection**: Recognizes and declares a draw when no more moves are possible. 
  * **Game Reset**: A "Reset Game" button allows players to start a new game at any time. 
  * **Responsive Design**: The layout is optimized for a seamless experience on both desktop and mobile devices.

-----

## Tech Stack

This project is built exclusively with core web technologies:

  * **HTML5**
  * **CSS3**
  * **JavaScript (ES6+)**

-----

## Installation and Usage

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/RohanThawait/tic-tac-toe.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd tic-tac-toe
    ```
3.  **Open the `index.html` file in your web browser.** No special servers or build steps are required.

-----

## Project Learnings & Reflection

Building this project was an excellent exercise in practical JavaScript application. Key takeaways include:

  * **State Management**: The importance of maintaining a clean, single source of truth for the game state (e.g., the current board, the active player) and ensuring all UI updates are derived from this state.
  * **DOM Manipulation**: Gained significant practice in selecting and manipulating DOM elements efficiently to reflect the game state without direct library assistance.
  * **Event Handling**: Implemented a robust event listening model to capture user interactions and trigger the appropriate game logic, using event delegation for better performance.
  * **Algorithmic Thinking**: Designed and implemented the algorithm for checking win conditions, which involved iterating through rows, columns, and diagonals after each move. This reinforced the process of breaking down a logical problem into programmable steps.
