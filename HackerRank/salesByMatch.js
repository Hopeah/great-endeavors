// Task

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
  if (n === 1) {
    return 0;
  }

  let pairs = 0;

  // Write your code here
  const socks = {};

  ar.forEach((sock) => {
    if (socks[sock]) {
      socks[sock] += 1;
    } else {
      socks[sock] = 1;
    }
  });
  Object.keys(socks).forEach((sock) => {
    pairs += Math.floor(socks[sock] / 2);
  });

  return pairs;
}
