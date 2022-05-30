// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//PREP 

//P - parameters
//Given a string with words separated by either dashes or underscores, of various capitalization? first word capitalized only if it has been capitalized initially

//R - returns
//Return a camel case string

//E - examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//P - pseudocode

//check if the string includes - or _


function toCamelCase(str) {
    //check if the string includes - or _
    if (str.includes('-')) {
        //break the string into an array using either - or _ separator
        //Use reduce to get a new string
        return str.split('-').reduce((p, c) => p + c[0].toUpperCase() + c.slice(1))
    } else if (str.includes('_')) {
        return str.split('_').reduce((p, c) => p + c[0].toUpperCase() + c.slice(1))
    }
    return ''
}