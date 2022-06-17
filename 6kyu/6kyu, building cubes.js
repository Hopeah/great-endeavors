// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

//PREP

//P - parameters
//Given an integer, positive?

//R - returns
//Return the integer that fits the n^3 + (n-1)^3 + ... + 1^3 = m, if no such integer exist - return -1

//E - examples
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

//P - pseudocode

function findNb(m) {
    //Set up two values, one to count the sum of the cubes, the other one to count the integer n
    let sum = 0;
    let n = 0;
    //Start looping through the numbers, every iteration add 1 to the integer n, add the current n^3 to the sum
    while (sum < m) {
        n += 1
        sum += n**3
    }
    //At the end, check whether the sum equals to m, if it does - return the n, if it doesn't - return -1
    return sum == m ? n : -1
}
