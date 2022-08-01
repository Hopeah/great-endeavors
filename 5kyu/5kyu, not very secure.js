// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

//PREP

//P - parameters
//Given a string, can be empty, or can contain whitespaces and/or underscores

//R - returns
//Return true if a string is not empty, doesn't contain whitespaces or underscores

//E - examples
//"Mazinkaiser" -> true
//"hello world_" -> false
//"     " -> false



function alphanumeric(string){
    //Check if it contains whitespaces, underscores, is empty
    if (!string || string.length < 0) {
        return false  
      }
    return (!string.includes('_') && string.split(' ').join('') === string && string !== '' && !string.includes('!') && !string.includes('&'))
}
