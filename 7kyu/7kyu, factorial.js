// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.

//PREP

//P - parameters
//Given a integer, could be 0, could be negative

//R - returns
//Return a factorial of that number, if it's below 0 or above 12, throw a "RangeError" error

//E - examples
//factorial(0) -> "factorial for 0 is 1"
//factorial(3) -> "factorial for 3 is 6"

//P - pseudocode

function factorial(n)   {
    //Check if it's negative or above 12, if yes -> throw "RangeError"
    if (n < 0 || n > 12) {
        throw new RangeError("error")
    }
    //Create a variable that will store the factorial
    let factorial = 1
    //Create a loop to loop through all numbers from 1 to given integer
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    //Return the calculated factorial
    return factorial
}

function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}