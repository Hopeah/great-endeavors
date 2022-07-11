// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

//PREP

//P - parameters
//Given arrays nested in a single array containing positive integers, could contain an empty nested array ([[]])

//R - returns
//Return a single array, sorting all the numbers based on going clockwise in a matrix from outermost elements to innermost (in a whirl/snail-like pattern)

//E - example
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

//P - pseudocode

snail = function(array) {
    //Check whether the array is empty
    if (!array[0][0]) {
        return []
    }
    //Establish the dimensions of a matrix (length of an array) in both direction
    const dimension = array.length;
    //Create an array variable to store every integer in
    let snailed = [];
    //Establish initial "snail" move direction
    let direction = 'right';
    //Create variables hmin + hmax (horizontal direction) and vmin + vmax (vertical direction)
    let hmin = 0;
    let hmax = dimension - 1;
    let vmin = 0;
    let vmax = dimension - 1;
    //Create h and v variables which will be iterables
    let h = hmin;
    let v = vmin;
    //Create a variable to store completion of operation
    let completion = false;
    //Create a while statement that will be active while the completion of operation is false
    while (!completion) {
        //Set up switch statements for four directions (right, down, left, up) 
        switch (direction) {
            case 'right':
                h = hmin;
                v = vmin;
                for (v; v <= vmax; v++) {
                    snailed.push(array[h][v])
                }
                direction = 'down'
                hmin++;
                break;
            case 'down':
                h = hmin;
                v = vmax;
                for (h; h <= hmax; h++) {
                    snailed.push(array[h][v])
                }
                direction = 'left'
                vmax--;
                break;
            case 'left':
                h = hmax;
                v = vmax;
                for (v; v >= vmin; v--) {
                    snailed.push(array[h][v])
                }
                direction = 'up'
                hmax--;
                break;
            case 'up':
                h = hmax;
                v = vmin;
                for (h; h >= hmin; h--) {
                    snailed.push(array[h][v])
                }
                direction = 'right'
                vmin++;
                break;        
        }
        //Set up an if statement that will execute, one of the axes' mins has to be larger than its max
        if (hmin > hmax || vmin > vmax) {
            completion = true
        }
    }
    return snailed
}

snail = function(array) {
    var result;
    while (array.length) {
      // Steal the first row.
      result = (result ? result.concat(array.shift()) : array.shift());
      // Steal the right items.
      for (var i = 0; i < array.length; i++)
        result.push(array[i].pop());
      // Steal the bottom row.
      result = result.concat((array.pop() || []).reverse());
      // Steal the left items.
      for (var i = array.length - 1; i >= 0; i--)
        result.push(array[i].shift());
    }
    return result;
  }