// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Constraints
// 0 <= input.length <= 100

//PREP

//P - parameters
//Given a string, string consists of "("  or ")" parentheses, max length is 100

//R - returns
//Return true if all parentheses close correctly, return false if they do not

//E - examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

//P - pseudocode

function validParentheses(parens) {
    //Create an array into which we will sort opening parentheses
    let parentheses = []
    //Loop through the string
    for (let i = 0; i < parens.length; i++) {
        //If string starts with an opening parenthesis -> push it to the array, continue with the loop
        if (parens[i] == "(") {
            parentheses.push(parens[i]);
            continue;
        }
        //If the array is empty but the parenthesis is closing, return false
        if (parentheses.length === 0) {
            return false
        }
        //If it's not empty, pop the last parenthesis out
        if (parens[i] == ")") {
            parentheses.pop('(')
        }
    }
    //Return the check whether the array is empty
    return parentheses.length == 0
}

function validParentheses(parens){
    let n = 0;
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
}