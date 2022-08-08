// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

//PREP

//P - parameters
//Given a positive integer 

//R - returns
//Return the number! of divisors a given integer has

//E - examples
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

//P - pseudocode

function getDivisorsCnt(n){
    //Set up a counter to count every divisor
    let count = 1
    //Set up a loop to go from 1 all the way to the n/2
    for (let i = 1; i <= n/2; i++) {
        //If the divison of an integer by a number doesn't have a remainder, add one to the counter
        if ((n/i)%1 === 0) {
            count++
        }
    }
    //Return the counter
    return count
}
