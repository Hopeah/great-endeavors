// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//PREP

//P - parameters
//Given an array of integers

//R - returns
//Return an array with even numbers maintaining their positions in the array, but odd numbers sorted in ascending order

//E - examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//P - pseudocode

function sortArray(array) {
    //Create an array to store all odd numbers in, sort it
    let oddArray = array.filter(number => Math.abs(number)%2 === 1).sort((a, b) => a - b)
    //Loop through all numbers of the original array, replace the odd ones with the ones from the new array in order
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i])%2 === 1) {
            array[i] = oddArray.shift()
        }
    }
    return array
}

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}