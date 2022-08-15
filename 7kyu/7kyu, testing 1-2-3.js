// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

//PREP

//P - parameters
//Given an array of strings, could be empty

//R - returns
//Return an array of strings, modifying each string so that it gets index+1, : and space added before the original string

//E - examples
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//P - pseudocode

var number=function(array){
    //Map out the array to change every string to a template literal that includes additional substrings
    return array.map((string, index) => `${index+1}: ${string}`)
}

