// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.
// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).
// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// Have fun!

//PREP

//P - parameters
//Given an array of integers (could be an empty array)

//R - returns
//Return an object that contains two properties, pos and peaks, each needs to contain an array. Pos should contain a position of a local maxima, peak should contain the value of the local maxima

//E - examples
//pickPeaks([0, 1, 2, 5, 1, 0]) -> {pos: [3], peaks: [5]}
//pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) -> {pos: [3, 7], peaks: [6, 3]}
//pickPeaks([1, 2, 2, 2, 1]) -> {pos: [1], peaks: [2]}

//P - pseudocode 

//!!!! Doesn't work because can't pick positions after the first local maxima is found
function pickPeaks(arr){
    //Create an object that will store pos and peaks
    let posPeaks = {
        pos: [],
        peaks: []
    }
    //Create a variable that will store the numbers from original array that we go through
    let localMax = [0]
    //Loop through the original array, store numbers in the variable. Check whether the current number in the loop is less than or equal to the current maxima (Math.max) AND more than the previous number in the variable array -> if yes, then add the position and the peak to the object, empty the variable array
    for (let i = 1; i < arr.length; i++) {
        if (i <= Math.max(...localMax) && i > localMax[localMax.length-1]) {
            posPeaks.pos.push(arr.indexOf(Math.max(...localMax)))
            posPeaks.peaks.push(Math.max(...localMax))
            localMax = [0, i]
            continue
        }
        localMax.push(i)
    }
    //Return the object
    return posPeaks
}

//Good solution
function pickPeaks(arr) {
    //Create an object that will store pos and peaks
    let posPeaks = {
        pos: [],
        peaks: []
    }
    //Check whether an array can have a peak (length requirement)
    if (arr.length > 2) {
        //Store a position of the highest point found so far
        let pos = -1
        //Loop through all the integers in the array 
        for (let i = 1; i < arr.length; i++) {
            //If the current number is larger than the previous one, store its position in the pos variable
            if (arr[i] > arr[i-1]) {
                pos = i
            } else if (arr[i] < arr[i-1] && pos !== -1) { //On the other hand, if the current number is smaller than the previous one and a local max has already been found, store pos and peaks in the object, reset the position 
                posPeaks.pos.push(pos)
                posPeaks.peaks.push(arr[pos])
                pos = -1
            }
        }
    }
    return posPeaks
}