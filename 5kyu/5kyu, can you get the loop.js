// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop. Your objective is to determine the length of the loop.

// For example in the following picture the tail's size is 3 and the loop size is 12:


// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next
// Note: do NOT mutate the nodes!

//PREP

//P - parameters
//Given a starting node (could be a letter, a number, a sign), have a method of node.next() which will give us the next number in the linked list

//R - returns
//The length of the loop (a node will point to the previous examined node -> how many nodes in between, including those two?)

//E - examples
//A.setNext(A) -> 1
//A.setNext(B), B.setNext(A) -> 2
//A.setNext(B), B.setNext(B) -> 1

//P - pseudocode

function loop_size(node){
    //Create an array which will store all the nodes
    let nodes = []
    //Create a while loop and keep going until the array contains the node
    let done = false
    let index = 0
    while (!done) {
        if (!nodes.includes(node)) {
            nodes.push(node)
        } else {
            index = nodes.indexOf(node)
            done = true
        }
        node = node.next
    }
    //Return the length of the sliced array from the index
    return nodes.slice(index).length
}
