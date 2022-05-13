// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.


//PREP

//P - parameters
//d - direction, 'L' or 'R'
//a - an array of numbers

//R - returns
//Need to return an array which represents the newly oriented boxes

//E - examples
// Going 'R' [3, 2, 2, 1] => [1, 2, 2, 3]
// Going 'L' [5, 1, 3, 5, 2] => [5, 5, 3, 2, 1]

//P - pseudo code

function flip(d, a) {
    //conditional to check for L or R
    //return a sorted array either from small to large (R), or large to small (L)
    if (d === 'L') {
        return a.sort((a,b) => b - a)
    } else if (d === 'R') {
        return a.sort((a, b) => a - b)
    }
}