// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//PREP
//P - parameters
//String, letters + symbols + empty spaces, upper+lower case

//R - returns
//String with only letters replaced by their respective numbers in the alphabet, don't return anything other than that

//E - examples
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//P - pseudocode


function alphabetPosition(text) {
    //Make an array with alphabet characters
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    //Make an empty array to put numbers into
    let modifyText = []
    //Loop through the word and push to empty array numbers from the other array
    for (let i = 0; i < text.length; i++) {
        let textL = text.toLowerCase()
        if (alphabet.indexOf(textL[i]) > -1) {
            modifyText.push(alphabet.indexOf(textL[i]))
        }
    }
    //Return joined array with mapped numbers to add 1 to account for 0 start
    return modifyText.map(num => num + 1).join(' ')
}

function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
}

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
}