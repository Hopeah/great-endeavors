// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

//PREP

//P - parameters
//Given an array containing integers

//R - returns
//Return an array that contains all the numbers except one smallest value from the original array. Original array should not be modified. If given array is empty, return empty array

//E - examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//P - pseudocode
function removeSmallest(numbers) {
    //Create a variable which will store the minimum number
    let min = numbers[0]
    //Loop through the array and compare the numbers from the array to the minimum
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]
        }
    }
    //Find the index of the minimum number and store it in a variable
    const index = numbers.indexOf(min)
    //Return the sliced arrays 
    return numbers.slice(0, index).concat(numbers.slice(index+1))
}

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}