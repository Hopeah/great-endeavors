// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

//PREP

//P - parameters
//Given an integer that is more than 1

//R - returns
//Return all divisors of the number, if prime number - return `${n} is prime'

//E - examples
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

//P - pseudocode

function divisors(integer) {
    //Create an array to store divisors in
    let divisors = []
    //Set up a loop to start from 2, all the way up to the given integer, if the integer can be divided by the number -> push it to the array
    for (let i = 2; i < integer; i++) {
        if (integer%i === 0) {
            divisors.push(i)
        }
    }
    //Check the length of the array, if 0 - return the string, if more - return the array
    return divisors.length === 0 ? `${integer} is prime` : divisors
};