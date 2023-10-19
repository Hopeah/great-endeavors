// Task
// Bomberman is immune to bombs, so he can move freely throughout the grid. Here's what he does:

// Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
// After one second, Bomberman does nothing.
// After one more second, Bomberman plants bombs in all cells without bombs, thus filling the whole grid with bombs. No bombs detonate at this point.
// After one more second, any bombs planted exactly three seconds ago will detonate. Here, Bomberman stands back and observes.
// Bomberman then repeats steps 3 and 4 indefinitely.
// Note that during every second Bomberman plants bombs, the bombs are planted simultaneously (i.e., at the exact same moment), and any bombs planted at the same time will detonate at the same time.

// Given the initial configuration of the grid with the locations of Bomberman's first batch of planted bombs, determine the state of the grid after  seconds.

// For example, if the initial grid looks like:

// ...
// .O.
// ...
// it looks the same after the first second. After the second second, Bomberman has placed all his charges:

// OOO
// OOO
// OOO
// At the third second, the bomb in the middle blows up, emptying all surrounding cells:

// O.O
// ...
// O.O
// Function Description

// Complete the bomberMan function in the editory below.

// bomberMan has the following parameter(s):

// int n: the number of seconds to simulate
// string grid[r]: an array of strings that represents the grid
// Returns

// string[r]: n array of strings that represent the grid in its final state
// Input Format

// The first line contains three space-separated integers , , and , The number of rows, columns and seconds to simulate.
// Each of the next  lines contains a row of the matrix as a single string of  characters. The . character denotes an empty cell, and the O character (ascii 79) denotes a bomb.

function bomberMan(n, grid) {
  if (n === 1) return grid;

  let g = plantbombs(grid);

  grid = grid.map((c) => c.split(''));
  const x = (n - 2) % 2;
  const y = Math.floor((n - 2) / 2) % 2;

  if (x) {
    detonate(grid, g);
    if (y) {
      grid = [...g];
      g = plantbombs(grid);
      detonate(grid, g);
    }
  } else {
    g = plantbombs(grid);
  }

  return g.map((c) => c.join(''));
}

function plantbombs(grid) {
  return Array.from(Array(grid.length), () => Array(grid[0].length).fill('O'));
}

function detonate(grid, g) {
  for (let i = 0; i < grid.length; i++) {
    grid[i].forEach((cell, j) => {
      if (cell === 'O') {
        g[i][j] = '.';
        if (g[i][j - 1]) g[i][j - 1] = '.';
        if (g[i][j + 1]) g[i][j + 1] = '.';
        if (g[i + 1]) g[i + 1][j] = '.';
        if (g[i - 1]) g[i - 1][j] = '.';
      }
    }, '');
  }
}
