// Task
// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

function isSorted(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1].charCodeAt() > s[i].charCodeAt()) {
      return false;
    }
  }
  return true;
}

function gridChallenge(grid) {
  let j = 1,
    i = 0;
  grid = grid.map((s) => s.split('').sort().join(''));

  while (true) {
    if (j == grid.length) {
      i++;
      j = 1;
    }

    if (i == grid[0].length) {
      return 'YES';
    }

    if (grid[j - 1][i] > grid[j][i]) {
      return 'NO';
    }
    j++;
  }
  return 'YES';
}
