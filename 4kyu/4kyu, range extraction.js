// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
// Courtesy of rosettacode.org

//PREP

//P - parameters
//Given an array of integers (positive and/or negative) arranged in increasing order

//R - returns
//Return a string that contains the integers from the array with ranges separated by '-' IF an array included 3+ numbers that come one after the other 

//E - examples
// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]) -> "-10-8,-6,-3-1,3-5,7-11,14,15,17-20"

//P - pseudocode

function solution(list){
    //Create an array which will store the numbers
    let arr = []
    //Create two variables (set them equal to each other from the start), start and end, and set them equal to the first integer from the list
    let start = end = list[0]
    //Go through the entire list starting from the second integer
    list.shift()
    for (let i = 0; i <= list.length; i++) {
        //If the integer in the list does NOT equal to the end+1:
        if (list[i] !== end+1) {
            //If end variable still equals start variable, append the start variable to the array
            if (end === start) {
                arr.push(start.toString())
            } else if (end === start+1) { //If end variable equals to start+1, append start, then append end
                arr.push(start.toString())
                arr.push(end.toString())
            } else { //Else, append start + '-' + end
                arr.push(start + '-' + end)
            }
            start = list[i]
        }
        //Set end variable to the integer from the list
        end = list[i]
    }
    //Return array joined by ','
    return arr.join(',')
}