// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
    let newNum = Math.abs(number)
    return sum = String(newNum).split('').reduce((a, b) => Number(a) + Number(b), 0)
}

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}