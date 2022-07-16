// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

//PREP
//P - parameters
//Given an array of strings (could be empty) and an integer (could be 0 or negative)

//R - returns
//Return the first longest string consisting of a number of consecutive strings (number being the given integer). If the array is empty, OR the given integer is larger than the length of the array, OR the given integer is negative or 0 -> return an empty string

//E - examples
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2 -> "folingtrashy"
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

//P - pseudocode
function longestConsec(strarr, k) {
      //Take care of cases when it's impossible to get a string
      if (strarr.length === 0 || strarr.length < k || k <= 0) {
        return ''
    }
    //Create a variable to store the longest string in
    let longest = ''
    //Loop through the given array (condition being less than i-given number)
    for (let i = 0; i < strarr.length; i++) {
        //Nest another loop which will start with i, condition will be i+given number
        //Create a variable to store the current string in
        let current = ''
        for (let j = i; j < i+k; j++) {
            //Concat every word up to the required number 
            if (strarr[j]) {
              current += strarr[j]
            }
        }
        //Check against the word stored in the string, if it's longer -> store it
        if (longest.length < current.length) {
            longest = current
        }
    }
    //Return the variable containing the longest string
    return longest
}

function longestConsec(strarr, k) {
    let longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}