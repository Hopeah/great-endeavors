// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

//PREP

//P - parameters
//Given a string with potentially mixed capitalization, only one word? Could be empty?

//R - returns
//Return the first letter (the same way it is in the word itself) that does NOT repeat (lower and upper case letters are considered the same). If no such letter, or if a string is empty - return an empty string OR None

//E - examples
//'a' -> 'a'
//'stress' -> 't'
//'moonmen' -> 'e'
//'sTreSS' -> 'T'

//P - pseudocode

function firstNonRepeatingLetter(s) {
    //convert the entire string to lower ccase
    const lowCase = s.toLowerCase()
    //loop through every letter in the string
    for (let i = 0; i < s.length; i++) {
        //check whether the current letter in the loop is the only one by comparing indexOf and lastIndexOf
        if (lowCase.indexOf(lowCase[i]) === lowCase.lastIndexOf(lowCase[i])) {
            //return the letter from the original string using the current loop index
            return s[i]
        }
    }
    //return empty string if no letter has been found
    return ''
}
