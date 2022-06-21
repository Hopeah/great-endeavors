// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array/list.

//PREP

//P - parameters
//Given an array of integers (positive or negative), array could be empty

//R - returns
//Return inverse of a number, if array is empty - return empty array

//E - examples
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

//P - pseudocode

function invert(array) {
    //Map every number to the negative of that number, then return the array
    return array.map(number => -number)
}