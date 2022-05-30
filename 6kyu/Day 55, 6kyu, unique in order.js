// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//PREP

//P - parameters
//Sequence of some characters, could be an array or a string, can be numbers or letters (different in capitalization)

//R - returns
//Return an array that contains every unique element in order (can repeat overall in the array)

//E - examples
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//P - pseudocode

function uniqueInOrder(sequence) {
    //check with typeOf whether the sequence is a string, if it is - convert to an array
    if (typeof(sequence) === 'string') {
        sequence = [...sequence]
    }
    //create an array to which every unique number will be added
    let orderedUniques = []
    //loop through the sequence which is an array
    for (let i = 0; i < sequence.length; i++) {
        //check whether the element is in the new array && if it's NOT the last added element:
        if (orderedUniques.includes(sequence[i]) && (orderedUniques[orderedUniques.length-1] !== sequence[i])) {
            // if true, add to new array
            orderedUniques.push(sequence[i])
        } else if (!orderedUniques.includes(sequence[i])) {
            //add to new array if not in there yet
            orderedUniques.push(sequence[i])
        }
    }
    return orderedUniques
}

function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
}

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}