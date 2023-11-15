# Knights-Travail
 

<img width="689" alt="Screenshot 2023-11-14 at 10 29 19" src="https://github.com/OdinsBeard82/Knights-Travail/assets/113264602/21fc4715-9449-416f-9a8a-84a140293b74">

## Live Demo
[Live Demo on Netlify](https://6554e591010abc26e395a16f--fabulous-hotteok-6563d0.netlify.app/)


# Knight Moves

This project implements a solution for finding the shortest path for a knight on an 8x8 chessboard using breadth-first search (BFS) and depth-first search (DFS) algorithms. The goal is to determine the optimal moves for a knight to reach from one square to another on the chessboard.

## Introduction

A knight in chess has a unique L-shaped move, and the task is to identify the shortest sequence of moves to reach a destination square from a starting square.

## Features

- **Interactive Chessboard**: The application provides an interactive chessboard where users can select a starting and ending square for the knight.

- **Shortest Path Display**: The program visually displays the shortest path on the chessboard and prints the coordinates of each step in the console.

- **Reset Functionality**: Users can reset the board to its initial state, allowing them to try different combinations.

## Usage

1. Open `index.html` in a web browser.
2. Click on a chess square to set it as the starting point for the knight.
3. Click on another square to set it as the destination.
4. The program will display the shortest path on the chessboard and print the path coordinates in the console.

## Implementation Details

- The chessboard is represented as a grid, and the knight's moves are treated as a tree structure.
- BFS and DFS algorithms are used to traverse the tree and find the shortest path.
- The visualization includes highlighting the selected squares, the path, and moving the knight on the board.

Feel free to explore the code for further details and customization.

## Technologies Used

- HTML, CSS for the front-end.
- JavaScript for the logic and interactivity.

Enjoy exploring the knight's moves on the chessboard!
