// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// PREP

// P - Parameters
//Two arrays, only numbers?

//R - Returns
//Should return an array consisting only of values in a that were not found in b

//E - Examples
// arrayDiff([1, 2], [1]) => [2]
// arrayDiff([1, 2, 2, 2, 3], [2]) => [1, 3]

//P - PseudoCode

// function arrayDiff(a, b) {
//     //create new empty array
//     let arrayUnique = []
//     if (b.length === 0) {
//       return a
//     } 
//     //loop through first array to check for first value in b
//     for (let i = 0; i < a.length; i++) {
//         //nest loop through b if needed
//         for (let y = 0; y < b.length; y++) {
//             //remove value if present in both
//             if (a[i] !== b[y]) {
//                 arrayUnique.push(a[i])
//             }
//         }
//     }
//     //return new array
//     return arrayUnique
// }

// function arrayDiff(a, b) {
//     let newArr = []
//     //loop through b
//     for (let i = 0; i < b.length; i++) {
//         //filter a to not include a value that we are looping through in b
//         if (a.includes(b[i]) === 'true') {
//             newArr = a.filter(number => number !== b[i])
//         }
//     }
//     //filter a to not include a value that we are looping through in b
//     //return new array
//     return newArr
// }

function array_diff(a, b) {
    //filter a 
    //parameter to filter will be b NOT including a number from a
    return a.filter(number => !b.include(number))
}