// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//PREP

//P - parameters
//Given two arrays, each including only integer numbers

//R - returns
//Return the sum of all elements from the two arrays

//E - examples
//arrayPlusArray([1, 2, 3], [4, 5, 6]) -> 21
//[-1, -2, -3], [-4, -5, -6]) -> -21

//P - pseudocode

function arrayPlusArray(arr1, arr2) {
    //Concat the two arrays
    let arr3 = arr1.concat(arr2)
    //Reduce the array
    //Return the reduced array
    return arr3.reduce((p, c) => p + c, 0)
}