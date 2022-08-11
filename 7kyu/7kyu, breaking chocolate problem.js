// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

//PREP

//P - parameters
//Could be two non-negative integers, or empty

//R - returns
//Return the minimum amount the two integers could be broken down 

//E - examples
//breakChocolate(5, 5) -> 24
//breakChocolate(3, 1) -> 2
//breakChocolate(2, 1) -> 1
//breakChocolate(1, 1) -> 0

//P - pseudocode

//Since we are breaking one piece at a time, and 1x1 is unbreakable, the amount of times we need to break a piece will equal to the product of the matrix - 1 
function breakChocolate(n, m) {
    return n && m > 0 ? n*m - 1 : 0
}