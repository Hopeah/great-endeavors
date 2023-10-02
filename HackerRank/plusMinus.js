// Task
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  const totalLen = arr.length;

  const totalPos = arr.filter((x) => x > 0).length;
  const totalNeg = arr.filter((x) => x < 0).length;
  const totalZero = arr.filter((x) => x === 0).length;

  const ratioPos = parseFloat((totalPos / totalLen).toFixed(6));
  const ratioNeg = parseFloat((totalNeg / totalLen).toFixed(6));
  const ratioZero = parseFloat((totalZero / totalLen).toFixed(6));

  console.log(`${ratioPos}\n${ratioNeg}\n${ratioZero}`);
}
