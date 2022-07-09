// Build a function that returns an array of integers from n to 1 where n>0.

//PREP

//P - parameters
//Given an integer, always positive

//R - returns
//Return an array which contains integers from n to 1

//E - examples
//n=5 --> [5,4,3,2,1]

//P - pseudocode

const reverseSeq = n => {
    //Create an array to store integers in
    let integers = []
    //Loop through, starting with n, subtracting one from i every cycle
    for (n; n >= 1; n--) {
        integers.push(n)
    }
    //Return the array
    return integers
};
