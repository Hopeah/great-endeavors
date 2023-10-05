// Task
// Comparison Sorting
// Quicksort usually has a running time of n x log(n), but is there an algorithm that can sort even faster? In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. A comparison sort algorithm cannot beat n x log(n)  (worst-case) running time, since n x log(n) represents the minimum number of comparisons needed to know where to place each element. For more details, you can see these notes (PDF).

// Alternative Sorting
// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

// Given a list of integers, count and return the number of times each value appears as an array of integers

function countingSort(arr) {
  // Write your code here
  let freqArr = new Array(100).fill(0);
  for (let i of arr) {
    freqArr[i] += 1;
  }
  return freqArr;
}
