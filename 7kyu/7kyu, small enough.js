// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//PREP

//P - parameters
//Given a non-empty array of integers and a positive integer

//R - returns
//Return true if all integers in the array are below or equal to the limit value, false otherwise

//E - examples
//smallEnough([66, 101] -> 200), true
//smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) -> false

//P - pseudocode

function smallEnough(a, limit){
    //Sort the array
    //Compare the limit to the last integer in the array, if limit if larger or same -> return true, otherwise return false
    return a.sort((a, b) => a - b)[a.length-1] <= limit ? true : false
}
