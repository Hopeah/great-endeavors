// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum( a,b ) {
    let sum = 0
    let y = 0
    let z = 0
    if (a <= b) {
      y = a;
      z = b;
    } else {
      y = b;
      z = a;
    }
    for (let i = y; i <= z; i++) {
      sum += i     
    }
    return sum
}

function GetSum(a,b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}