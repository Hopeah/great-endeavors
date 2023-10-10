// Task
// Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.

function towerBreakers(n, m) {
  // Write your code here
  if (m === 1 || n % 2 === 0) {
    return 2;
  } else {
    return 1;
  }
}
