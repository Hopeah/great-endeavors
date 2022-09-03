// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

//PREP

//P - parameters
//Given a string, contains letters and #

//R - returns
//Return a string that is left if every # is a backspace (deleting a previous entry)

//E - examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

//P - pseudocode

function cleanString(s) {
    //Create an array which will store the strings
    let cleaned = []
    //Loop through the string, push every non "#" in, pop if it's "#" 
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "#") {
            cleaned.push(s[i])
        } else if (s[i] === "#" && cleaned.length > 0) {
            cleaned.pop()
        }
    }
    //Return a joined array
    return cleaned.join('')
}
