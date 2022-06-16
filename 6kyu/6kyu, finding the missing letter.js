// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// (Use the English alphabet with 26 letters!)

//PREP

//P - parameters
//Give an array of letters, all either capitalized or lower cased, all in alphabetical order 

//R - returns
//Return a missing letter in the same case (capitalized or lower case)

//E - examples
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

//P - pseudocode

function findMissingLetter(array) {
    //Store the alphabet in a string, check for capitalization -> convert the string to the required case and break into an array
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if (array[0] === array[0].toUpperCase()) {
        alphabet = alphabet.toUpperCase().split('')
    } else {
        alphabet = alphabet.split('')
    }
    const length = array.length
    //Slice the alphabet based on indexOf(array[0]) and indexOf(array[array.length])+1
    const slicedA = alphabet.slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[length-1])+1)
    //Filter the original array for a letter that is not included in the sliced alphabet
    return slicedA.filter(letter => !array.includes(letter)).toString()
}

const findMissingLetter = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};