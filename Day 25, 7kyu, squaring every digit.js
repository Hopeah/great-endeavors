// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
    let numArr = num.toString().split('')
    let squaredNum = numArr.map(num => Number(num) ** 2)
    let solution = squaredNum.join('')
    return Number(solution)
}

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}