// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//PREP

//P - parameters
//Given an array that consists of at least one integer

//R - returns
//Return an array that contains the maximum and the minimum numbers from the given array 

//E - examples
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

//P - pseudocode

function minMax(arr){
    //Create an array which will hold min and max
    let minmax = []
    //Push min from arr
    minmax.push(Math.min(...arr))
    //Push max from arr
    minmax.push(Math.max(...arr))
    //Return a new array
    return minmax
}

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}