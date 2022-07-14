// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//PREP

//P - parameters
//Given a string, could be empty

//R - returns
//Return an object that contains all the characters from the string and the number of times they are repeated

//E - examples
// count('aba') -> {a: 2, b: 1}
// count('') -> {}

//P - pseudocode
function count (string) {  
    //Return an empty object for an empty string
    if (string.length === 0) {
        return {}
    }
    //Create an object in which characters will be stored in
    let countChar = {}
    //Loop through the string
    for (let i = 0; i < string.length; i++) {
        //If an entry already exists, ++ to it
        if (countChar[string[i]]) {
            countChar[string[i]]++
        } else { //If an entry doesn't exist, create it and make it equal to 1
            countChar[string[i]] = 1
        }
    }
    //Return an object
    return countChar
}
