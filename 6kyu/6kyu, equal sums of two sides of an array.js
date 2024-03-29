// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

//PREP

//P - parameters
//An array of integers (can be positive or negative), length of an array is between 0 and 1000, empty arrays equal to 0

//R - returns
//Return an index of an array where the sum of the numbers to the left of it equals to the sum of the numbers to the right
//Return -1 if no such index can be found
//Return the smallest index if multiple indecies can be found

//E - examples
//{1,2,3,4,3,2,1} -> index of 3
//{1,100,50,-51,1,1} -> index of 1
//{20,10,-80,10,10,15,35} -> index of 0

//P - pseudocode

function findEvenIndex(arr) {
    //Loop through the array
    for (let i = 1; i < arr.length-1; i++) {
        //Compare left side with slice(0, i) to the right side slice(i+1), reduce both to get the sum
        if (arr.slice(0, i).reduce((p, c) => p + c, 0) === arr.slice(i+1).reduce((p, c) => p + c, 0)) {
            return i
        }
    }
    //Return i if found where they are equal, -1 otherwise
    return -1
}

//Failed test case:

// The array was: [20,10,-80,10,10,15,35] : expected -1 to equal 0

function findEvenIndex(arr) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      let start = arr.slice(0, i+1).reduce((a, b) => a + b, 0);
      let end = arr.slice(i).reduce((a, b) => a + b, 0)
      if (start === end) {
        index = i
      }
    }
    return index;
}