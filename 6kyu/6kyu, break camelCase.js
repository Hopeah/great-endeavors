// Complete the solution so that the function will break up camel casing, using a space between words.

//PREP
//P - parameters
//Given a string, can be all lower case or empty, can have multiple uppercase letters

//R - returns
//Return a string separating words that begin with a capitalized letter

//E - examples
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//P - pseudocode
function solution(string) {
    //Check if empty string
    if (string.length === 0) {
        return ''
    }
    //Create a string variable to hold letters
    let split = ''
    //Loop through all the letters of a given string
    for (let i = 0; i < string.length; i++) {
        //If a letter is the same as uppercase of the letter -> concat space + letter, continue the loop
        if (string[i] === string[i].toUpperCase()) {
            split += ` ${string[i]}`;
            continue;
        }
        //Concat the letter
        split += string[i]
    }
    //Return the string
    return split
}

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
}

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
}