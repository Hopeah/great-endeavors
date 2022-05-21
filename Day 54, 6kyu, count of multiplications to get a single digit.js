// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

//PREP

//P - parameters
//Positive whole digits only

//R - returns
//Amount of times needed to multiple every digit of a number to get to a single digit

//E - examples
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//P - pseudocode

function persistence(num) {
    //Need a counter that will count how many times we have multipled the number
    let count = 0
    // Make number into a string to work with it as an array
    num = String(num)
    //Make a while loop to check for length of the num + update counter for every loop + reduce the number using stringified number as an array through split + map (into a number) + reduce methods
    while (num.length > 1) {
        num = String(num.split('').map(Number).reduce((a, b) => a * b, 1))
        count++
    }
    return count
}