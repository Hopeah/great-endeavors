// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

//PREP

//P - parameters
//Given an array of numbers? and an integer

//R - return
//Return an array that consists of the elements of the given array where elements can repeat only the amount of times specified by the integer, position of all elements should be maintained

//E - examples
// The input number is 2, and the input list is [1,2,3,1,2,1,2,3] -> [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1 -> [20,37,21].

//P - pseudocode

function deleteNth(arr,n){
    //Create new array to put motifs in
    let motifs = []
    //Set up a loop to push motifs to the new array
    for (let i = 0; i < arr.length; i++) {
        //Check for whether the newArr.filter(ele => ele == arr[i]).length < integer
        if (motifs.filter(ele => ele === arr[i]).length < n) {
            //If it is less -> push the number, if it is not -> do nothing
            motifs.push(arr[i])
        }
    }
    //Return new array
    return motifs
}