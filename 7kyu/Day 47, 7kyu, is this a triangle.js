// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//PREP

//P - parameters
//Only 3 numbers, whole, positive, 0 possible

//R - returns
//Either true for when a triangle is possible, or false when it's not possible

//E - examples
//isTriangle(1, 2, 2)
//isTriangle(7, 2, 2)

//P - pseudo code
function isTriangle(a, b, c) {
    //triangle inequality - sum of 2 sides needs to be greater than the third side
    //conditional check whether above statement is true for all three sides
    if ((a+b > c) && (b+c > a) && (a+c > b)) {
        return true
    }
    return false
}