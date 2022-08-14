// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

//PREP

//P - parameters
//Given an array of integers, or an empty array, or null value

//R - returns
//Return a sorted array, small -> big, if array has no integers or not an array -> return an empty array

//E - examples
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//P - pseudocode

//Return a .sort((a, b) => a - b) : []

function solution(array) {
    return array && array.length > 0 ? array.sort((a, b) => a - b) : []
}