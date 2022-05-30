// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let obj = {}
    A.forEach(function(number) {
        obj[number] ? obj[number]++ : obj[number] = 1
    })

    for (number in obj) {
        if (obj[number] % 2 !== 0) return Number(number)
    }
}