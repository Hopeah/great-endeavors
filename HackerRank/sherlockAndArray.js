// Task
// Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

function balancedSums(arr) {
  // Write your code here
  let sumLeft = 0;
  let sumRight = arr.reduce((a, c) => a + c, 0) - arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (sumLeft === sumRight) {
      return 'YES';
    } else if (sumLeft > sumRight) {
      return 'NO';
    }
    sumLeft += arr[i];
    sumRight -= arr[i + 1];
    console.log(sumLeft, sumRight);
  }
  return 'NO';
}
