// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').


//PREP

//P - parameters
//Given a string that contains only alphabetical characters and single spaces 

//R - returns
//Return a string where each even indexed character is upper cased, odd - lower cased, ignore spaces

//E - examples
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

//P - pseudocode

function toWeirdCase(string){
    //Break the string to array
    let array = string.split(' ')
    //Loop through array
    for (let i = 0; i < array.length; i++) {
        //Break each word into letters, map to the required capitalization, join back into word
        array[i] = array[i].split('').map((letter, index) => index%2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')
    }
    //Return joined array
    return array.join(' ')
}
