// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.

//PREP

//P - parameters
//Given two arrays, each containing strings only, could contain duplicates

//R - returns
//Return an array that contains strings from the first given array which are also included in second array but only as substrings
//No duplicates allowed
//Return empty array if no substrings can be found

//E - examples
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

//P - pseudocode

function inArray(array1,array2){
      //Create an array inside of which substrings will be stored
      let substrings = []
      //Create a loop to loop through the first array
      for (let i = 0; i < array1.length; i++) {
          //Check whether the new array doesn't contain a current string
          if (!substrings.includes(array1[i])) {
              //Check whether the second array contains a string that includes the string from array one (using filter?)
              if (array2.filter(string => string.includes(array1[i])).length > 0) {
                  substrings.push(array1[i])
              }
          }
      }
      //Return the new array
      return substrings.sort()
}

function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
}