// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//PREP
//P - parameters
//Two strings (sometimes one?), containing letters from a to z only, no capital letters

//R - returns
//Return a single string containing unique characters from both strings (not repeating in a new string), sorted

//E - examples
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//P - pseudocode





function longest(s1, s2) {
    //Create an array into which we will place new letters
    let longestString = [];
    //Find out which string is the longest
    let length;
    s1.length > s2.length ? length = s1.length : length = s2.length;
    //Check each string, if letter is not in an array yet - add
    for (let i = 0; i < length; i++) {
        if (!longestString.includes(s1[i])) {
            longestString.push(s1[i])
        } 
        if (!longestString.includes(s2[i])) {
            longestString.push(s2[i])
        }
    }
    //Sort the array and join into a string
    return longestString.sort().join('')
}

function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
