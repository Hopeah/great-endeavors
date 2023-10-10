// Task

// In this challenge, the task is to debug the existing code to successfully execute all provided test files.

// Given an array of n distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first k elements in the sequence are in increasing order and the last k elements are in decreasing order, where k = (n + 1)/2. You need to find the lexicographically smallest zig zag sequence of the given array.

function processData(input) {
  const arr = input.split('\n')[input.split('\n').length - 1];
  const sortedArr = arr.split(' ').sort((a, b) => a - b);

  const midPoint = Math.floor(sortedArr.length / 2);
  const midNum = sortedArr[midPoint];
  const lastNum = sortedArr[sortedArr.length - 1];
  const firstZig = sortedArr.slice(0, midPoint);
  const secondZag = sortedArr
    .slice(midPoint + 1, sortedArr.length - 1)
    .concat(midNum)
    .sort((a, b) => b - a);

  const zigZag = firstZig.concat(lastNum).concat(secondZag);
  console.log(zigZag.join(' '));
}
