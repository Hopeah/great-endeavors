// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

//PREP

//P - parameters
//Given a string that contains various parentheses such as (), [], {} only

//R - returns
//Return true if all braces orders are valid, false is at least one is not

//E - examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

//P - pseudocode
function validBraces(braces){
    //Create a key with all braces variations
    const key = {'(': ')', '[': ']', '{': '}'};
    //Create an array in which opening braces will be stored
    let open = []
    //Loop through the braces array
    for (let i = 0; i < braces.length; i++) {
        //Store every parenthesis that is being examined in a variable
        let parenthesis = braces[i]
        //If the variable matches the key (means it's opening) -> push it in the array of opening braces
        if (key[parenthesis]) {
            open.push(parenthesis)
            //If it doesn't (means it's closing) -> see if it matches the key by popping the brace out of the array, if not -> return false
        } else {
            if (parenthesis !== key[open.pop()]) {
                return false
            }
        }
    }
    //Return the length of the braces array to be 0
    return open.length === 0
}

function validBraces(braces){
    for (var i = 0, depth = []; i < braces.length; i++) {
      switch (braces[i]) {
        case '(': case '[': case '{': depth.push(braces[i]); break;
        case ')': if (depth.pop() != '(') return false; break;
        case ']': if (depth.pop() != '[') return false; break;
        case '}': if (depth.pop() != '{') return false; break;
      }
    }
    return depth.length == 0;
}