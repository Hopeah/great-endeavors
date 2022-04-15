// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//PREP

//P - parameters
//Array of numbers, could be negative or positive

//R - returns
//Return a string, if the sum of all numbers in the array is odd - 'odd', if even - 'even'
//Empty string counts as a string containing a 0

//E - examples
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//P - pseudocode

function oddOrEven(array) {
    //Account for an empty array
    if (!array) {
        array = [0]
    }
    //Find the sum of the numbers in the array
    const sum = array.reduce((p, c) => p + c, 0)
    //Return either even or odd
    sum%2 === 0 ? 'even' : 'odd'
}

function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}