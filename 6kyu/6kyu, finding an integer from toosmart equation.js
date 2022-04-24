// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

//PREP

//P - parameters
//First number - a positive integer
//Second number - a single positive integer

//R - returns
//Return another integer that multipled by the second number will equal to the sum of the digits of the first integer taken to the successive powers of the second integer

//E - examples
// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//P - pseudocode

function digPow(n, p){
    //Create an accumulator
    let sum = 0;
    //Split the first number into the array
    const nArr = n.toString().split('')
    //Do a loop adding every number taken to the required power to the sum
    for (let i = 0, power = p; i < nArr.length; i++, power++) {
        sum += (+nArr[i]) ** power
    }
    //Divide the sum by the first number and if there is a valid integer return it, if not - return -1
    return sum/n % 1 == 0 ? sum/n : -1
}