// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

//PREP

//P - parameters
//A non-negative whole number

//R - return
//Return a whole number that is a given number divided by 100 rounded up

//E - examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//P - pseudocode

function century(year) {
    //Use Math.ceil to round up a passed argument divided by 100
    return Math.ceil(year/100)
}