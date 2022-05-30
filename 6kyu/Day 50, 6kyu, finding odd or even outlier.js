// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//PREP

//P - parameters
//An array, length - 3+, only whole numbers, either odd or even, one integer is the opposite to odd/even

//R - returns
//Return the only integer that is the opposite to all the other numbers in parity

//E - examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//P - pseudocode

function findOutlier(integers) {
    //Loop through the array to check for odd/even
    const isOdd = integers.filter(number => number%2 !== 0)
    if (isOdd.length > 1) {
        return parseInt(integers.filter(number => number%2 === 0).join(''))
    } else {
        return parseInt(isOdd.join(''))
    }
    //Return the integer that doesn't fit the same profile as the rest of the numbers
}

function findOutlier(integers) {
    const even = integers.filter(number => number%2 === 0)
    const odd = integers.filter(number => number%2 !== 0)
    return even.length === 1 ? even[0] : odd[0]
}