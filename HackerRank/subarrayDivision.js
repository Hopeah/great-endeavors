// Task
// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

function birthday(s, d, m) {
  // Write your code here
  let waysToDivide = 0;
  let sum = 0;

  for (let i = 0; i < m; i++) {
    sum += s[i];
  }

  if (sum === d) {
    waysToDivide++;
  }

  for (let i = m; i < s.length; i++) {
    sum += s[i] - s[i - m];

    if (sum === d) {
      waysToDivide++;
    }
  }

  return waysToDivide;
}
