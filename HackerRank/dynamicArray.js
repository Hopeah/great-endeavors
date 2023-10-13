// Task
// Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
// Declare an integer, lastAnswer, and initialize it to 0.
// Declare an answers array.
// Parse through each query. The format of each query will be [type, x, y]. There are 2 types of queries, given as an array of strings for you to parse, treat them according to their type:
// Query: 1 x y
// Let idx = ( (x ^ lastAnswer) % n ).
// Append the integer y to arr[idx].
// Query: 2 x y
// Let idx = ( (x ^ lastAnswer) % n ).
// Assign the value arr[idx][y % size(arr[idx])] to lastAnswer.
// Store the new value of lastAnswer to answers array.
// Return answers array.

function dynamicArray(n, queries) {
  // Write your code here
  let lastAnswer = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  let answers = [];
  for (let i = 0; i < queries.length; i++) {
    const type = queries[i][0];
    const x = queries[i][1];
    const y = queries[i][2];
    const idx = (x ^ lastAnswer) % n;
    if (type === 1) {
      arr[idx].push(y);
    } else if (type === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }

  return answers;
}
