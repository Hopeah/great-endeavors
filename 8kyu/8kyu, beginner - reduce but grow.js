// Given a non-empty array of integers, return the result of multiplying the values together in order. 

//PREP

//P - parameters
//Given an array of integers, cannot be empty

//R - returns
//Return the result of multiplying the numbers

//E - examples
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//P - pseudocode

function grow(x){
    //Reduce the array by multiplying
    //Return the reduced array
    return x.reduce((p, c) => p * c, 1)
}
