// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

//PREP

//P - parameters
//Given a string of words, could be an empty string

//R - returns
//Return a string so that every word is capitalized with no spaces between the words

//E - examples
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

//P - pseudocode

String.prototype.camelCase=function(){
    //Split the string into an array
    return this.split(' ')
    //Map each word in the array to start with an upper case letter
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join('')
}
