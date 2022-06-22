// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.

//PREP

//P - parameters
//Given an array of capitalized? strings which contain NORTH/SOUTH and WEST/EAST (which are directly opposite to each other)

//R - returns
//Return an array containing only strings that are not adjacent to their opposite counterparts

//E - examples
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] -> ["WEST"]
// ["NORTH", "SOUTH", "EAST", "WEST"] -> [] 
// ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"] -> ["WEST", "WEST"]

//P - pseudocode

function dirReduc(arr){
    const result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "NORTH" && arr[i + 1] === "SOUTH" || arr[i] === "SOUTH" && arr[i + 1] === "NORTH" || arr[i] === "EAST" && arr[i + 1] === "WEST" || arr[i] === "WEST" && arr[i + 1] === "EAST"){
            i++
        } else {
            if(result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST"){
                result.pop()
            } else {
                result.push(arr[i])
            }
        }
    }
    return result
}

function dirReduc(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
          arr[i] === "EAST" && arr[i+1] === "WEST" ||
          arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
          arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
          arr.splice(i, 2);
          count++;
          i--;
      }
    }
    return count === 0 ? arr : dirReduc(arr);
}