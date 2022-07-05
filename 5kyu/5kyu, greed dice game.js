// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

//PREP

//P - parameters
//Given an array with five integers valued from 1-6

//R - returns
//Return the "score" of the given integers following these rules, counting an integer only once:
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

//E - examples
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

//P - pseudocode

//Create cases for each rule
function score(dice) {
    //Create a variable to store the score in
    let score = 0
    //Create an object that stores rules for threes of a number
    const threes = {
        1: 1000,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600
    }
    //Create an object that stores rules for ones of a number
    const ones = {
        1: 100,
        5: 50
    }
    //Create an object to store array's dice in
    let dices = {
    }
    //Loop through the given array, transfer every integer in the object
    for (let i = 0; i < dice.length; i++) {
        //If number is already accounted for in the object, simply add one more to the key
        if (dices[dice[i]]) {
            dices[dice[i]]++
        } else {
            //It is the first occurance of a number, create key + vvalue
            dices[dice[i]] = 1
        }
    }
    //Now loop through the created object and pick out the numbers that match the rules
    for (let i in dices) {
        //Check threes
        if (dices[i] >= 3) {
            score += threes[i]
            dices[i] -= 3
        }
        //Check if any of the ones are inside the array 
        if (ones[i]) {
            //If they are, update the score by multiplying the value of the die by the leftover amount (will be either 1 or 2)
            score += ones[i] * dices[i]
        }
    }
    //Return the score
    return score
}