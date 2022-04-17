// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//PREP

//P - parameters
//Given a single string of undeterminate length, possibly any characters, can be empty

//R - returns
//Return an array that consists of the split string consisting of 2 characters

//E - examples
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//P - pseudocode

function solution(str) {
    // if (!str) {
    //     return []
    // }
    //Check if it's an odd length string -> add "_" if so
    if (str.length%2 !== 0) {
        str = str + "_"
    }
    //Create an empty array
    let array = []
    //Loop and slice, pushing sliced parts to the array
    for (let i = 0; i < str.length; i += 2) {
        array.push(str.slice(i, i+2))
    }
    return array
}

function solution(str){
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
}