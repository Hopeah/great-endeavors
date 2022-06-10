// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//PREP

//P - parameters
//Given an array with at least 3 numbers all of which are equal to each other except one

//R - returns
//Return the unique number

//E - examples
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

//P - pseudocode

function findUniq(arr) {
      //Return filtered an array where indexOf() === lastIndexOf()
      return Number(arr.filter(number => arr.indexOf(number) === arr.lastIndexOf(number)).join(''))
}

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}