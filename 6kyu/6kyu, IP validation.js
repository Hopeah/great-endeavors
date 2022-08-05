// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

//PREP

//P - parameters 
//Given a single string containing numbers and dots

//R - returns
//Return true if string provides a valid input, false if not
//To be considered valid, string needs to: have 4 octets (separated by '.'), none of the octets can start with a leading zero, values have to be between 0 and 255 (inclusive) 

//E - examples
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

//P - pseudocode

function isValidIP(str) {
    //Break the string into an array by '.' separator
    const arr = str.split('.')
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if (arr.length !== 4) {
        return false
    }
    //Loop through each item in the array
    for (let i = 0; i < arr.length; i++) {
        //Check whether an item satisfies the rules to be valid, if not - return false
        if ((arr[i][0] == 0 && arr[i].length > 1)|| Number(arr[i]) < 0 || Number(arr[i]) > 255 || alphabet.test(arr[i]) || arr[i].trim() !== arr[i] || arr[i].length === 0 || arr[i][0] == '-') {
            return false
        }
    }
    //Return true
    return true;
}

function isValidIP(str) {
    var p = str.split('.');
    return p.length == 4 && p.every(function(s) {
      return /^\d+$/.test(s) && s >= 0 && s <= 255;
    });
}