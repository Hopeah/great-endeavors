// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//PREP

//P - Parameters
//Only numbers, no negatives, whole

//R - Returns
//Return the amount of bits (amount of 1s in binary) that it takes to represent the number provided

//E - Examples
//1234 => 10011010010 => 5

//P - PseudoCode

var countBits = function(n) {
    //Take the number and convert to binary using .toString(2) method
    //Break the string into the array
    //Split the array
    //Filter all the 1s
    //Join in the string
    //Return string's length
    return n.toString(2).split('').filter(number => number === '1').join('').length
};

countBits = n => n.toString(2).split('0').join('').length;