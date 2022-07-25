// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Attention: If the number has leading zeros the amount of digits should be considered.

//PREP

//P - parameters
//Given a string that contains either only lowercase letters or lowercase letters + numbers, the string could be empty

//R - returns
//Return a string, if the original string didn't end with a number -> add 1 to the end, if the original string did end with a number -> increment that number by 1. If the ending numbers has leading 0s and number got incremented to more characters -> remove the leading zero

//E - examples
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

//P - pseudocode

function incrementString (strng) {
  // Extract string's number
  var number = string.match(/\d+/) === null ? 0 : string.match(/\d+/)[0];
  
  // Store number's length
  var numberLength = number.length

  // Increment number by 1
  number = (parseInt(number) + 1).toString();
  
  // If there were leading 0s, add them again
  while (number.length < numberLength) {
    number = "0" + number;
  }
    
  return string.replace(/[0-9]/g, '').concat(number);
}

function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
}