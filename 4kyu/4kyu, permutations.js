// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.
// The order of the permutations doesn't matter.

//PREP

//P - parameters
//Given a string

//R - returns
//Return an array containing all the possible ways the letters in a string could be ordered

//E - examples
// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

//P - pseudocode

function permutations(str) {
    //Check whether the string is a single letter, if yes -> return string, otherwise..
    return (str.length <= 1) ? [str] :
            //Create an array from new set (which is an array that has no repeats)
            Array.from(new Set(
                //split the passed in string
              str.split('')
              //do a callback function 
                 .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                 .reduce((r, x) => r.concat(x), [])
            ));
}