// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// Note
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

//PREP

//P - parameters
//Given two positive integers (they could be equal to each other)

//R - returns
//Return an array which contains subarrays. Subarrays should have 2 numbers, first -> number whose divisors can be squared and added up to make a number that is itself a square, second -> the sum of its squared divisors 

//E - examples
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

//P - pseudocode

//Create a function that will get all the divisors of a number
function divisorsOf(x) {
    //Create an array which will store all the divisors
    let divisors = []
    //Loop through the numbers starting from 1 and all the way to the squared number of a given integer
    for (let i = 1; i <= x/2; i++) {
        //If the integer can be fully divided by the number, push it in the divisors array
        if (x%i === 0) {
            divisors.push(i)
        }
    }
    divisors.push(x)
    //Return the array
    return divisors
}

function listSquared(m, n) {
    //Create an array which will store all the numbers that follow the requirement
    let numbersSums = []
    //Loop over the given range of numbers
    for (let i = m; i <= n; i++) {
        //Get the divisors of the number
        let divisors = divisorsOf(i)
        //Reduce the divisors array
        const sum = divisors.reduce((p, c) => (c*c) + p, 0)
        //Check whether the reduced array is a square
        if (Math.sqrt(sum)%1 === 0) {
            numbersSums.push([i, sum])
        }
    }
    //Return the newly created array
    return numbersSums
}
