// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// NOTE: All numbers will be whole numbers greater than 0.

//PREP

//P - parameters
//Given an integer greater than 0

//R - returns
//Return the number expanding all thousands, hundreds, tens, single digits separately as a string

//E - examples
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

//P - pseudocode

function expandedForm(num) {
    //Split the string into an array
    return num.toString()
    //Split the array
            .split('')
    //Reverse it
            .reverse()
    //Map using index, to multiply every number by 10 to the power of its position in the array
            .map((number, index) => number * Math.pow(10, index))
    //Filter numbers that are above 0 only
            .filter(number => number > 0)
    //Reverse the array to get the original order
            .reverse()
    //Join using " + "
            .join(" + ")
}