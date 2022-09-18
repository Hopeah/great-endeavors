// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

//PREP

//P - parameters
//Given a string consisted of separate words

//R - returns
//Return a string that doesn't contain repeated words

//E - examples
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' -> 'alpha beta gamma delta'

//P - pseudocode

function removeDuplicateWords (s) {
      //Split the string by a word
      const split = s.split(' ')
      //Create an array to store unique substrings
      let noDupes = []
      //Loop through the split string, push unique words inside an array
      for (let i = 0; i < s.length; i++) {
          if (!noDupes.includes(split[i])) {
              noDupes.push(split[i])
          } 
      }
      //Return the joined array
      return noDupes.join(' ').trim()
}

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')