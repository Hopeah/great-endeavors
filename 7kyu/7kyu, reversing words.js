// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//PREP

//P - parameters
//A string with multiple words/punctuation

//R - returns
//Return every word in a string (punctuation gets tied to the word it is next to), keeping the same case for all the letters

//E - examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//P - pseudocode

function reverseWords(str) {
    //Break the string into an array using the space delimiter
    const strArr = str.split(' ')
    //Map the array -> breaking every array entry into another array of letters, reversing them, and then combining back into a string
    const reversedArr = strArr.map(word => word.split('').reverse().join(''))
    //Return the combined string from the first array using space delimiter
    return reversedArr.join(' ')
}