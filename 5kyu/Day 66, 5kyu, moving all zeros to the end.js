// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//PREP

//P - parameters
//An array of various values, numbers/strings/booleans

//R - returns
//Return the same array but with any zeros present moved to the end of it

//E - examples
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//P - pseudocode




function moveZeros(arr) {
    //Create a variable to hold the total length of filtered array for zeros
    const zeros = arr.filter(value => value === 0).length
    //Create an array to hold all the values except zeros
    let newArr = arr.filter(value => value!== 0)
    //Do a loop to push a zero to the new array
    for (let i = 1; i <= zeros; i++) {
        newArr.push(0)
    }
    return newArr
}

function moveZeros(arr) {
    const filtedList = arr.filter(function (num){return num !== 0;});
    const zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
}