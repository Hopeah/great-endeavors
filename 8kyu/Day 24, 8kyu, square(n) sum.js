// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      let squared = numbers[i] ** 2;
      sum += squared
    }
    return sum
}

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
}