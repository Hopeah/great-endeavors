// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

//PREP

//P - parameters
//Given 9 arrays which contain 9 integers (from 0 to 9)

//R - returns
//Return true if 9x9 grid follows sudoku rules, false if it does not

//E - examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

//P - pseudocode

function validSolution(board){
    //Create a variable to store the size of a grid (9)
    const grid = 9
    //Check if any of the arrays contain a 0 - if yes return false
    for (let i = 0; i < grid; i++) {
    if (board[i].includes(0)) {
        return false
    }
    }
    //Create a variable that will populate an array with booleans
    let check = Array(grid+1).fill(false)
    //Loop through outer arrays to check every row by 1) resetting the boolean variable, 2) looping through inside arrays, 3) checking if boolean is true -> if it is, return false, if it's not, set it to true
    for (let i = 0; i < grid; i++) {
    check = Array(grid+1).fill(false)
    for (let j = 0; j < grid; j++) {
        let num = board[i][j]
        if (check[num]) {
            return false
        }
        check[num] = true
    }
    }
    //Loop through inner arrays to check every column by 1) resetting the boolean variable, 2) looping through outer arrays, 3) checking if boolean is true/false
    for (let j = 0; j < grid; j++) {
    check = Array(grid+1).fill(false)
    for (let i = 0; i < grid; i++) {
        let num = board[i][j]
        if (check[num]) {
            return false
        }
        check[num] = true
    }
    }
    //Loop through outer arrays to check the upper squares by 1) looping through inner arrays to move from square to square, 2) resetting the boolean variable, 3) looping through a variable that moves horizontally within a square, 4) looping through a variable that moves vertically within a square, 5) finding the single number on the grid using sum of both horizontal and vertical values, 6) checking of boolean is true/false
    for (let i = 0; i < grid-2; i += 3) {
    for (let j = 0; j < grid-2; j += 3) {
        check = Array(grid+1).fill(false)
        for (let h = 0; h < 3; h++) {
            for (let v = 0; v < 3; v++) {
                let x = i + h;
                let y = j + v;
                let num = board[x][y]
                if (check[num]) {
                    return false
                }
                check[num] = true
            }
        }
    }
    }
    //Return true if everything is good
    return true
}
