// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//PREP

//P - parameters
//A string, contains only upper/lower case letters or/and numbers, count upper/lower as same

//R - returns
//Return how many characters occur more than once

//E - Examples
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//P - PseudoCode

function duplicateCount(string) {
    //create a duplicate counter
    //create an array that includes already checked characters
    //make a loop that goes through all characters in a string
    //make a second loop to check one character vs all others
    //make a conditional statement that checkes whether the character in a string already counted towards the duplicate counter
    let duplicateCounter = 0;
    let duplicateCharacters = [];
    let stringL = string.toLowerCase()
    for (let i = 0; i < string.length; i++) {
        for (let y = 0; y < string.length; y++) {
            if (i !== y && stringL[i] === stringL[y] && !duplicateCharacters.includes(stringL[i])) {
                duplicateCharacters.push(stringL[i]);
                duplicateCounter += 1
            }
        }
    }
    return duplicateCounter
}

function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}