// Task
// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

function pageCount(n, p) {
  // Write your code here
  const fromStart = Math.floor(p / 2);
  const fromEnd = Math.floor(n / 2 - fromStart);

  const result = Math.min(fromStart, fromEnd);
  return result;
}
