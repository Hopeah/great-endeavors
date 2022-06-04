// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.


//PREP

//P - parameters
//Operation in a form of a string, two numbers

//R - returns
//Return the result of the two numbers after applying the operation

//E - examples
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//P - pseudocode



function basicOp(operation, value1, value2) {
  //Make switch expression for various operations?
  switch(operation) {
    case '+':
        return value1 + value2
        break;
    case '-':
        return value1 - value2
        break;
    case '*':
        return value1 * value2
        break;
    case '/':
        return value1 / value2
        break;
  }
}

function basicOp(o, a, b) {
    return eval(a+o+b);
}