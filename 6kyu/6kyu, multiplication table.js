// Your task, is to create NxN multiplication table, of size provided in parameter.

//PREP

//P - parameters
//Given a number that defines the size of the grid

//R - returns
//Return a nested array, which contains the grid

//E - examples
// for example, when given size is 3 -> [[1,2,3],[2,4,6],[3,6,9]]
// 1 2 3
// 2 4 6
// 3 6 9

//P - pseudocode

multiplicationTable = function(size) {
    //Create the main array which will store sub-arrays
    let main = []
    //Create a double loop
    //First loop will determine the column, second one will determine the row
    for (let i = 1; i <= size; i++) {
        let sub = []
    //After every inside loop completion, push the result to the main array
        for (let y = 1; y <= size; y++) {
            sub.push(i*y)
        }
        main.push(sub)
    }
    //Return the main array
    return main
}