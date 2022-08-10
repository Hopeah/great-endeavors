// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//PREP

//P - parameters
//Given a string 

//R - returns
//Return a string that is different is a specific string is passed as a parameter

//E - examples
//greet("Jim") -> "Hello, Jim!"
//greet("Johnny") -> "Hello, my love!"

//P - pseudowork

//This is the original code that needs to be fixed
function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
}

//Since the conditinal is after the return statement, the function will never get to the said conditional statement
//To fix this, conditional statement needs to come first, such as: 

function greet(name){
    if(name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

//And this is a one-liner

function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}