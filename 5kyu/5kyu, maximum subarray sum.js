// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr){
    //Check whether the array is empty or contains only negative numbers
    if (arr.length == 0 || arr.filter(num => num > 0).length == 0) {
        return 0
    }
    //Create a variable to store the max sum found
    let maxSumSoFar = arr[0]
    //Create a variable to store every sum that is found on different iterations
    let maxSumEndingHere = arr[0]
    //Make a loop to check for every possible ending in the array
    for (let i = 1; i < arr.length; i++) {
        //Store the max sum found between the first number of the array and the next number(s) OR! overwrite the sum if it's less than a single digit of a number checking against in the array
        maxSumEndingHere = Math.max(maxSumEndingHere + arr[i], arr[i])
        //If the max sum found on a particular iteration is larger than the sum stored in the variable, overwrite it to reflect the max sum
        if (maxSumSoFar < maxSumEndingHere) {
            maxSumSoFar = maxSumEndingHere
        }
    }
    //Return the max sum found
    return maxSumSoFar
}