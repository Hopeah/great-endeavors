// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//PREP

//P - parameters
//Given a single string with multiple words, all lowercase, words separated by a single space

//R returns
//Return a single word that scores the highest (every letter gives amount of points according to where it is at in the alphabet), if multiple words have same score - return the one that is the first in the string

//E - examples
//'man i need a taxi up to ubud' -> 'taxi'
//'aa b' -> 'aa'
//'aaa b' -> 'aaa'

//P - pseudocode

function high(x){
    //Create an array which will store the alphabet
    const alphabet = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //Split the string in to an array
    const arr = x.split(' ')
    //Create a variable that will hold a word with the highest score + the score itself
    let highest = []
    //Loop through the array of words, splitting them into individual letters -> mapping them to be scores -> reducing them to the sum of all scores -> comparing them with the score in the variable
    for (let i = 0; i < arr.length; i++) {
        let score = arr[i].split('').map(letter => alphabet.indexOf(letter)).reduce((p, c) => p + c, 0)
        if (highest.length === 0) {
            highest.push(arr[i])
            highest.push(score)
        }
        if (highest[1] < score) {
            highest[0] = arr[i]
            highest[1] = score
        }
    }
    //Return the word inside the variable
    return highest[0]
}
