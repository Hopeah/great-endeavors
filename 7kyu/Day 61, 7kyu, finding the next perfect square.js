// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//PREP

//P - parameters
//Non-negative integer, whole?

//R - returns
//Return -1 if the passed number was not a perfect square, return the next number that is a perfect square

//E - examples
// (Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//P - pseudocode

function findNextSquare(sq) {
    //See if a square root of a number is a whole number
    if (Math.sqrt(sq) % 1 === 0) {
        //If it is, return number + 1 squared
        const num = Math.sqrt(sq)
        return Math.pow(num+1, 2)
    }
    //If it is not, return -1
    return -1;
}

function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}