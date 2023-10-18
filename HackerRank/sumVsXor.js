// Task
// Given an integer n, find each x such that:
// 0 <= x <= n
// n + x = n XOR x

function sumXor(n) {
  let zeroCount = 0;
  let bitStr = n.toString(2);

  // Counting the number of zeros in the binary string
  for (let i = 0; i < bitStr.length; i++) {
    if (bitStr[i] === '0') {
      zeroCount++;
    }
  }
  if (n === 0) {
    zeroCount = 0;
  }

  // Pattern for finding the XOR values
  return Math.pow(2, zeroCount);
}
