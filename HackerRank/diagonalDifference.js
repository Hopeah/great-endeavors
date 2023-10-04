// Task
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9. The right to left diagonal = 3 + 5 + 9. Their absolute difference is |15 - 17| = 2.

function diagonalDifference(arr) {
  let diagonal1Sum = 0;
  let diagonal2Sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonal1Sum += matrix[i][i]; // Add elements from the main diagonal
    diagonal2Sum += matrix[i][matrix.length - 1 - i]; // Add elements from the secondary diagonal
  }

  // Calculate the absolute difference between the two sums
  const absoluteDifference = Math.abs(diagonal1Sum - diagonal2Sum);

  return absoluteDifference;
}
