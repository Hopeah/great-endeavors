// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//PREP

//P - parameters
//Given an array of integers, can be positive or negative

//R - returns
//Return an array of two numbers, first - count of positive numbers, second - the sum of all negative numbers
//If given an empty or null array, return an empty array

//E - examples
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//P - pseudocode

function countPositivesSumNegatives(input) {
    //Somehow can test for an array only containing zeros by doing array.length === 0?
    if(!input || input.filter(number => number !== 0).length === 0) {
        return []
    }
    //Create an array to put count/sum in
    let countAndSum = []
    //Put the length of an array containing only positive numbers inside the new array
    countAndSum.push(input.filter(number => number > 0).length)
    //Put the reduced sum of all negative numbers inside the new array
    countAndSum.push(input.filter(number => number < 0).reduce((p, c) => p + c, 0))
    //Return the new array
    return countAndSum
}