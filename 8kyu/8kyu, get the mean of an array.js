// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//PREP

//P - parameters
//Given an array of integers, always positive?

//R - returns
//Return the average of array's numbers, rounded down to the nearest integer

//E - examples
//getAverage([2,2,2,2]) -> 2
//getAverage([1,2,3,4,5,]) -> 3

//P - pseudocode 

function getAverage(marks){
    //Reduce the array
    //Divide by the length of the original array
    //Return the average
    return Math.floor(marks.reduce((p, c) => p + c, 0) / marks.length)
}
