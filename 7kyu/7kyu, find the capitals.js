// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

//PREP 

//P - parameters
//Given a single string containing only letters

//R - returns
//Return an array of indecies of capitalized letters in a provided string

//E - example
//capitals('CodEWaRs') -> [0,3,4,6]

//P - pseudocode

var capitals = function (word) {
	//Create an array containing all alphabet capital letters 
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    //Create an array that will store the indecies
    let indecies = []
    //Loop through the given word, every time an alphabet array includes current letter -> push its index to the new array
    for (let i = 0; i < word.length; i++) {
        if (alphabet.includes(word[i])) {
            indecies.push(i)
        }
    }
    //Return the new array
    return indecies
}

var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};