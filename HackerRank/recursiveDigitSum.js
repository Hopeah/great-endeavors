// Task
// Find a super digit, which is defined as a sum of every digit in a number until only one digit remains

// This won't pass all cases because k might be very large which will lead to a very large superN which means it will exceed the max safe integer size in JS
function superDigit(n, k) {
  // Write your code here
  let superN = n.repeat(k);
  let superDigit = superN;

  while (superDigit.length > 1) {
    let splitDigit = superDigit.split('');
    superDigit = splitDigit.reduce((a, c) => +a + +c, 0).toString();
  }

  return superDigit;
}

function superDigit(n, k) {
  // Calculate the super digit of 'n'
  function calculateSuperDigit(str) {
    if (str.length === 1) {
      return parseInt(str, 10);
    }

    const sum = str
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    return calculateSuperDigit(sum.toString());
  }

  const superDigitSingle = calculateSuperDigit(n);
  const superDigitMultiple = superDigitSingle * k;

  // Calculate the super digit using modulo 9 (unless the number is a multiple of 9)
  if (superDigitMultiple % 9 === 0) {
    return 9;
  } else {
    return superDigitMultiple % 9;
  }
}
