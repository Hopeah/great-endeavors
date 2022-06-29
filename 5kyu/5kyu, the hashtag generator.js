// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

//PREP

//P - parameters
//Given a string, can be multiple words or letters or can be empty

//R - returns
//Return false IF passed string is empty OR the final string is longer than 140 characters

//E - examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//P - pseudocode

//Split the string into the array, map array for every word to start with a capitalized letter, join with no spaces
//Return the string concatenated with a "#" at the front, check if empty OR longer than 140

function generateHashtag (str) {
    if (str.trim().length == 0) {
        return false
    }
    const tag = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('')
    return tag.length >= 140 ? false : "#" + tag
}