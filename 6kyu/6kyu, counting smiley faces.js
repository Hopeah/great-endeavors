// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//PREP

//P - parameters
//Given an array of symbols

//R - returns
//Need to return the amount of times a valid smiley face appears
//Valid smiley faces contain: ":" or ";" followed by ")" or "D" 

//E - examples
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

//P - pseudocode

function countSmileys(arr) {
    //Create an array into which smileys will be placed
    let smileys = []
    //Loop through the given array, check for a:
    for (let i = 0; i < arr.length; i++) {
        //0) check whether the smiley has a length of 2 or 3
        if (arr[i].length === 2) {
            //1) valid pair of eyes at charAt(0) ( : or ; )
            //2) valid mouth at charAt(1) ( ) or D )
            if ((arr[i].charAt(0) === ":" || arr[i].charAt(0) === ";") && (arr[i].charAt(1) === ")" || arr[i].charAt(1) === "D")) {
                smileys.push(arr[i])
            }
        } else if (arr[i].length === 3) {
            //1) valid pair of eyes at charAt(0) ( : or ; )
            //2) valid nose at charAt(1) IF it has one, doesn't have to ( - or ~ )
            //3) valid mouth charAt(2) ( ) or D )
            if ((arr[i].charAt(0) === ":" || arr[i].charAt(0) === ";") && (arr[i].charAt(1) === "-" || arr[i].charAt(1) === "~") && (arr[i].charAt(2) === ")" || arr[i].charAt(2) === "D")) {
                smileys.push(arr[i])
            }
        }
    }
    //return the length of the new array
    return smileys.length
}

function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}