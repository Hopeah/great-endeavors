// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

//PREP

//P - parameters
//Given a positive integer

//R - returns
//Return the number of digits present in the given integer

//E - example
//9 -> 1, 66 -> 2, 128685 -> 6

//P - pseudocode

function digits(n) {
    //Convert the number to string and return the length
    return n.toString().length
}