// Task

// You will be given a list of integers, arr, and a single integer k. You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array arr'. Unfairness of an array is calculated as max(arr')-min(arr').

function maxMin(k, arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  let minUnfairness = Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    // Finds the biggest number in the window, and subtracts the smallest number in the window
    const unfairness = arr[i + k - 1] - arr[i];
    if (unfairness < minUnfairness) {
      minUnfairness = unfairness;
    }
  }

  return minUnfairness;
}
