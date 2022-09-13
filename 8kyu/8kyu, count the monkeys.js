// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

//PREP

//P - parameters
//Given a positive integer

//R - returns
//Return an array containing all the numbers starting from 1 to the given integer

//E - examples
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

//P - pseudocode

function monkeyCount(n) {
    //Create an array that will store all the numbers
    let count = []
    //Create a loop starting from 1, every iteration add the current number to the array
    for (let i = 1; i <= n; i++) {
        count.push(i)
    }
    //Return the created array
    return count
}