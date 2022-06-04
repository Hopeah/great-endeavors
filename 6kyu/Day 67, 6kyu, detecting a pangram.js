// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//PREP

//P - parameters 
//A string containing a sentence including punctuation

//R - returns
//Return true if the string contains all letters of an alphabet, return false otherwise

//E - examples
//The sentence "The quick brown fox jumps over the lazy dog" is a pangram

//P - pseudocode





function isPangram(string){
    //Create an array with alphabet letters
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //Convert string to lower case
    const lowCase = string.toLowerCase();
    //Filter the array to see if any letters are not in the string
    const filtered = alphabet.filter(letter => lowCase.indexOf(letter) === -1);
    if (filtered.length === 0) {
        return true
    } else {
        return false
    }
}