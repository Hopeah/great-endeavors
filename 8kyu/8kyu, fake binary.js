// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//PREP

//P - parameters
//Given a string of digits

//R - returns
//Return a string with numbers below 5 replaced by a 0 and 5 and above by a 1

//E - examples
//'14352' -> '00010'

//P - pseudocode

function fakeBin(x){
    //Split to an array
    //Map all to numbers, if above 4 -> 1, 4 or below -> 0
    return x.split('').map(number => +number < 5 ? 0 : 1).join('')
}

