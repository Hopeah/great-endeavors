// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

//PREP

//P - parameters
//Given a number n, will be a positive integer

//R - returns
//Return the number of trailing zeros in a factorial of n, do not calculate the factorial itself

//E - examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

//P - pseudocode

//This solution doesn't pass n = 846791404 (gives 211697850 instead of 211697844)
function zeros (n) {
    //Number of trailing zeros can be found by a summation of n / 5^k (from k=1 to kmax) where kmax equals to log5n
    //Find kmax
    const kmax = Math.log(n)/Math.log(5)
    //Create a variable for trailing zeros
    let z = 0
    //Loop through k values from 1 to kmax
    for (let k = 1; k <= kmax; k++) {
        //Add n/5k to the trailing zero variable
        z += n/5**k
    }
    //Return the trailing zeros
    return Math.floor(z)
}

function zeros (n) {
    if(n < 0) //Negative Number Edge Case
      return -1;
     
    // Initialize result
    let count = 0;
 
    // Keep dividing n by powers of
    // 5 and update count
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        count += Math.floor(n / i);
 
    return count;
}