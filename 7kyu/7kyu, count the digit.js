// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

//PREP

//P - parameters
//Given two integers, first >=0, second 0 <= and <= 9

//R - returns
//Return the amount of times second digit appears in all the squared numbers from 0 to the first integer

//E - examples
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

//P - pseudocode

function nbDig(n, d) {
    //Create a counter to count how many times an integer d appears
    let count = 0
    //Loop from 0 to integer n, squaring every number and checking whether it contains integer d
    for (let i = 0; i <= n; i++) {
        let square = i**2
        let amount = square.toString().split('').filter(digit => digit == d).length
        count += amount
    }
    //Return the counter
    return count
}
