// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// The input will be a lowercase string with no spaces.

//PREP

//P - parameters
//Given a string included lower case letters

//R - returns
//Return an array that first contains all even indexes capitalized, and then all odd indexes capitalized

//E - example
//capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

//P - pseudocode

function capitalize(s){
    //Create an array to store strings in
    let capitalized = []
    //Loop through all the letters
    //Create two string variables
    let even = ''
    let odd = ''
    for (let i = 0; i < s.length; i++) {
        //Every loop, push either a lowercase or upper case to the string
        if (i%2 === 0) {
            even += s[i].toUpperCase()
            odd += s[i]
        } else {
            even += s[i]
            odd += s[i].toUpperCase()
        }
    }
    //Push both strings to the array
    capitalized.push(even)
    capitalized.push(odd)
    //Return array
    return capitalized
};