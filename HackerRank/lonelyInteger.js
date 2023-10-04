// Task
// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a = [1, 2, 3, 4, 3, 2, 1]
// The unique element is 4.

function lonelyInteger(a) {
  // Write your code here
  const filteredA = a.filter(
    (integer) => a.indexOf(integer) === a.lastIndexOf(integer)
  )[0];
  return filteredA;
}
