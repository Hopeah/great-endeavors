// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    if (n < 10)
      return n;
  
    for (let sum = 0, i = 0, n = String(n); i < n.length; i++)
      sum += Number(n[i]);
     
    return digital_root(sum);
}

function digital_root(n) {
    if (n < 10) {
      return n
    }
    let sum = 0;
    let y = String(n);
    for (let i = 0; i < y.length; i++) {
      sum += Number(y[i])
    }
  
    return digital_root(sum)
}