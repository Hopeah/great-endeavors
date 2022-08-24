// Complete the solution so that it reverses all of the words within the string passed in.

//PREP

//P - parameters
//Given a string

//R - returns
//Return the string with all its words reversed

//E - examples
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//P - pseudocode

function reverseWords(str){
    //Convert the string into an array, reverse the array, convert back into a string, return
    return str.split(' ').reverse().join(' ')
}
