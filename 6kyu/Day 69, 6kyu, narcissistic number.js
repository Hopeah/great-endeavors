// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

//PREP

//P - parameters
//Only whole, positive, non-zero integers

//R - returns
//True if every digit of a number raised to the power of the number of the digits in the parameters and summed equals to the passed parameter. False if it doesn't.

//E - examples
//153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

//P - pseudocode

function narcissistic(value) {
    //Break numbers in array
    const valueArr = value.toString().split('')
    //Use reduce to get the sum of the numbers
    const sum = valueArr.reduce((p, c) => p + c ** valueArr.length, 0)
    //Return whether the original parameter equals to the sum
    return sum == value
}
  