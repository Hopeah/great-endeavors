// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

//PREP

//P - parameters
//Given a string that consists of letters + can contain special characters

//R - returns
//Return a string that doesn't contain anything after a special character + no whitespaces prior to a special character

//E - example
// apples, pears # and bananas -> // apples, pears
// grapes -> // grapes
// bananas !apples -> // bananas

//P - pseudocode

//Doesn't work?
function solution(input, markers) {
     //Split the given input string into an array with a new line separator
     let arr = input.split('\n')
     //Check each market with a for loop
     for (let i = 0; i < markers.length; i++) {
         //Per each marker, map the split input array to 1) if a string contains a marker -> sliced string, 2) if it doesn't contain the marker -> replace the trailing whitespaces 
         arr = arr.map(line => {
             const index = line.indexOf(markers[i]);
             if (index !== 1) return line.slice(0, index);
             else return line
         })
     }
     //Return the joined array (using new line separator again), trim all the trailing whitespaces
     return arr.join('\n').trimEnd()
};

function solution(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
}