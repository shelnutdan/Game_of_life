# Game of life
This is a simple recreation of John Conway's Game of Life. The user can set the number of generations that they want to iterate through. The user can click on the box to make the box active, this will set the box as "alive". Once the user has the desired configuration on the game board they can click on the start button to see how their configuration will end up after their desired amount of generations.

## Rules

Each of the square boxed has one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbors, which are the boxes that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

  1. Any live boxes with fewer than two live neighbors dies, as if by underpopulation.
  2. Any live boxes with two or three live neighbors lives on to the next generation.
  3. Any live box with more than three live neighbors dies, as if by overpopulation.
  4. Any dead box with exactly three live neighbors becomes a live box, as if by reproduction.

## Live Demo

[Live Demo](http://selective-island.surge.sh/)

## Clone this repo

`$git clone https://github.com/shelnutdan/Game_of_life.git`

## More information on the Game of life
Check this [interview](https://www.youtube.com/watch?v=E8kUJL04ELA&t=215s) with John Conway himself by NumberPhile

## Future Developments

Allow for slower iteration throughout he generations so that users get a better idea on how their configurations can change over time.
