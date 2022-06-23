// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//PREP

//P - parameters
//Given a string that contains letters (of various capitalization)/numbers/special characters

//R - returns
//Return a string that substitutes only letters with other letters so that the substituted letter is 13 letters in the alphabet AFTER the original one. Numbers/special symbols should not be replaced. Capitalization should be kept same way as in the original string

//E - examples
//"test" -> "grfg"
//"Test" -> "Grfg"

//P - pseudocode

function rot13(message){
    //Create two arrays containing alphabet, one with upper case letters, the other - with lower case
    const upperA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const lowerA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //Create an empty array into which the letters for the cyphered string will be placed
    let cyphered = []
    //Check every letter in a given string with a loop -> offer two choices, whether the letter is contained in the upper case array or in the lower case
    for (let i = 0; i < message.length; i++) {
        if (upperA.includes(message[i])) {
            //If letter is in, find index of that letter
            const index = upperA.indexOf(message[i])
            //Find the index that will be 13 spots away, if it's larger than the alphabet array -> subtract the length of the alphabet array
            let indexAway = index + 13
            if (indexAway >= upperA.length) {
                indexAway = indexAway - upperA.length
            } 
            //Push a letter from the alphabet array to the cyphered array using the new index
            cyphered.push(upperA[indexAway])
        } else if (lowerA.includes(message[i])) {
            //If letter is in, find index of that letter
            const index = lowerA.indexOf(message[i])
            //Find the index that will be 13 spots away, if it's larger than the alphabet array -> subtract the length of the alphabet array
            let indexAway = index + 13
            if (indexAway >= lowerA.length) {
                indexAway = indexAway - lowerA.length
            } 
            //Push a letter from the alphabet array to the cyphered array using the new index
            cyphered.push(lowerA[indexAway])
        } else {
            cyphered.push(message[i])
        }
    }
    //Return joined cyphered array
    return cyphered.join('')
}
