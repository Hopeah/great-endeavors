// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

//PREP

//P - parameters
//Given an array with either numbers, or empty

//R - returns
//Return the average of the numbers inside the array, or 0 if empty

//E - examples
//find_average([1,1,1]) -> 1
//find_average([1,2,3]) -> 2
//find_average([1,2,3,4]) -> 2.5

//P - pseudocode

//Return 0 if empty array
//Return reduce array, divide by 2
function find_average(array) {
    return array.length > 0 ? array.reduce((p, c) => p + c, 0)/array.length : 0
}