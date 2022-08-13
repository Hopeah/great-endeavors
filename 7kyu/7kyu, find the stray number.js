// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

//PREP

//P - parameters
//Given an array, odd amount of integers in it, all of them are the same except one

//R - returns
//Return the only integer that is different

//E - examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//P - pseudocode

function stray(numbers) {
    //Return a filtered array where the array is filtered by indexOf === lastIndexOf
    numbers.filter(integer => numbers.indexOf(integer) === numbers.lastIndexOf(integer))
    return numbers[0]
}

