// Task
// Louise and Richard have developed a numbers game. They pick a number and check to see if it is a power of 2. If it is, they divide it by 2. If not, they reduce it by the next lower number which is a power of 2. Whoever reduces the number to 1 wins the game. Louise always starts.

// Given an initial value, determine who wins the game.

function counterGame(n) {
  // Write your code here
  let move = 0;
  while (n > 1) {
    let power = parseInt(Math.log2(n));
    let max = 2 ** power;
    if (n === max) {
      n = parseInt(n / 2);
    } else {
      n = n - max;
    }
    move++;
  }
  if (move % 2 === 0) {
    return 'Richard';
  } else {
    return 'Louise';
  }
}
