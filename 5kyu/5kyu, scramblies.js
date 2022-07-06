// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

//PREP

//P - parameters
//Given two strings, both loower case, no punctuation/digits/symbols

//R - returns
//Return true if letters from str1 could be used to make str2, otherwise - return false

//E - examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

//P - pseudocode

function scramble(str1, str2) {
    //Check whether str1 doesn't contain a sufficient amount of letters
    if (str1.length < str2.length) {
        return false
    }
    //Create a function that will sort the strings in to objects by letter: repeat amount
    function getCharFrequencies(str) {
        return str.split('').reduce(
            function(container, letter) {
                (container[letter] += 1) || (container[letter] = 1);
                return container
            }, {}
        )
    }
    //Get the objects for both strings
    let obj1 = getCharFrequencies(str1);
    let obj2 = getCharFrequencies(str2);
    //Create a variable to store how many letters match
    let match = 0;
    //Compare every character from str2 to str1
    for (let letter in obj2) {
        if (obj2[letter] <= obj1[letter]) {
          match += obj2[letter]
        }
    }
    return match === str2.length 
}

function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((character) => --occurences[character] >= 0);
}