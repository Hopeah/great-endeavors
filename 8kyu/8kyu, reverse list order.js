// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//Input
//Given an array, never will empty

//Output 
//Return the original array but with all the elements in the reverse order

function reverseList(list) {
    //reverse method
    const reversedList = list.reverse()
    //return reversed list
    return reversedList
}