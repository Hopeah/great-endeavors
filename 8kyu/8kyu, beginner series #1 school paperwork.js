// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Waiting for translations and Feedback! Thanks!

//PREP

//P - parameters
//Given two integers, n -> number of people, m -> number of tasks, either could be negative

//R - returns
//Return the total amount of tasks you will need to do for each person (multiple the two nubmers together), if at least one of the numbers if less than 0, return 0

//E - examples
// n= 5, m=5: 25
// n=-5, m=5:  0

//P - pseudocode

function paperwork(n, m) {
    //Check whether either number is less than 0
    if (n <= 0 || m <= 0) {
        return 0
    }
    //Return the multiplication of the two numbers
    return n * m
}
