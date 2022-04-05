// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    //code here
    let arrDig = String(n).split('')
    return arrDig.map(Number).reverse()
}

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}