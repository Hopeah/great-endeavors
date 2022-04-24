// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// However, the arrays can have varying lengths, not just limited to 4.

//PREP 

//P - parameters
//An array that consists of 0s and 1s

//R - returns
//Return an integer that makes up the binary number that is in the array

//E - examples
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

//P - pseudocode

const binaryArrayToNumber = arr => {
    //Convert an array to a string
    let string = arr.join('')
    //Use parseInt(string, base of 2)
    return parseInt(string, 2)
};
