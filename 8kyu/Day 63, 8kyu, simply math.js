// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

//PREP

//P - parameters
//A non-negative number, whole or with a decimal

//R - returns
//Return a single whole number

//E - examples
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

//P - pseudocode


function liters(time) {
    //Every two hours = 1
    return Math.floor(time/2)
}