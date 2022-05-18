// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//PREP
//P - parameters 
//letters, numbers, special characters, spaces

//R - returns
//Return a new string replacing characters that don't repeat with "(" and characters that do repeat with ")"

//E - example
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//P - pseudocode

function duplicateEncode(word) {
    //Make an empty array which will hold new characters
    let encoded = []
    //Make an array which will hold letters that do repeat
    //Split the string into a lower case array
    //Filter an array and pull out any words that repeat
    const repeated = word.toLowerCase().split('').filter(function(char, index, array) {
        return array.indexOf(char) !== index && array.lastIndexOf(char) === index;
    })

    //Make a loop to check whether a character in a word is a part of a repeated array, add a designated symbol to encoded array
    for (let i = 0; i < word.length; i++) {
        if (repeated.includes(word.toLowerCase()[i])) {
            encoded.push(')')
        } else if (!repeated.includes(word.toLowerCase()[i])) {
            encoded.push('(')
        }
    }

    return encoded.join('')
}

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}