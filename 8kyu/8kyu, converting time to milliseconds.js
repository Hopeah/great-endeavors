// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

//PREP

//P - parameters
//Given three integers, first - hours, second - minutes, third - seconds

//R - returns
//Return how many milliseconds equal to given parameters

//E - examples
// h = 0
// m = 1
// s = 1
// result = 61000

//P - pseudocode

function past(h, m, s){
    //Convert hours and minutes to seconds, add seconds, multiple by a thousand
    return ((h * 3600) + (m * 60) + s) * 1000
}
