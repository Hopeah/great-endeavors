// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. 

//PREP

//P - parameters
//Given one word, one array of words, all lowercase? 

//R - retuns
//Return an array containing only anagrams of the provided word, if no anagrams - empty array

//E - examples
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

//P - pseudocode

function anagrams(word, words) {
    //Sort the word
    let sortedWord = word.split('').sort().join('')
    let wordIndex = []
    let anagrams = []
    //Sort every word in the array
    let sortedWords = words.map(word => word.split('').sort().join(''))
    //Find indecies of words that match sorted word, push them in a new array
    sortedWords.filter((word, index) => {
        if (word == sortedWord) {
            wordIndex.push(index)
        }
    })
    for (let i = 0; i < wordIndex.length; i++) {
        anagrams.push(words[wordIndex[i]])
    }
    return anagrams
}

//!!!!!!!!! Didn't have to do map!!!!!!!!!!! would have eliminated long answer!!!!!!!!!!!!!!

let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));