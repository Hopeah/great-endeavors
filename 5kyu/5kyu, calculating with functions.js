// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

//PREP

//P - parameters
//Given three premade functions, two of which are numbers (from zero to nine) and the other one is an operation (plus, minus, times, dividedBy) 

//R - returns
//Return a number in an integer form that will perform a required operation on the two given numbers

//E - examples
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

//P - pseudocode

//For the integers, have to check whether the integer has a function inside or not, if yes => the integer is a parameter of that function, if not => the integer is just a number
function zero(operation) {
    return operation ? operation(0) : 0
}
function one(operation) {
    return operation ? operation(1) : 1
}
function two(operation) {
    return operation ? operation(2) : 2
}
function three(operation) {
    return operation ? operation(3) : 3
}
function four(operation) {
    return operation ? operation(4) : 4
}
function five(operation) {
    return operation ? operation(5) : 5
}
function six(operation) {
    return operation ? operation(6) : 6
}
function seven(operation) {
    return operation ? operation(7) : 7
}
function eight(operation) {
    return operation ? operation(8) : 8
}
function nine(operation) {
    return operation ? operation(9) : 9
}

//For operations, the outer function must be returned first with a parameter inside the operation function, the parameter of the operation function is the right operand
//For division, Math.floor needs to be used to round to the lower integer
function plus(rightOperand) {
    return function(leftOperand) {
        return leftOperand + rightOperand
    }
}
function minus(rightOperand) {
    return function(leftOperand) {
        return leftOperand - rightOperand
    }
}
function times(rightOperand) {
    return function(leftOperand) {
        return leftOperand * rightOperand
    }
}
function dividedBy(rightOperand) {
    return function(leftOperand) {
        return Math.floor(leftOperand / rightOperand)
    }
}