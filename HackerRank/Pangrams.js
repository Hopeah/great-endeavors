// Task

// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// Return 'pangram' if an input is one, 'not pangram' otherwise

function pangrams(s) {
  // Write your code here
  const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';

  const squishedString = s
    .toLowerCase()
    .split('')
    .sort()
    .map((char, i, arr) => {
      if (arr.indexOf(char) === i) {
        return char;
      }
    })
    .join('')
    .trim();

  return englishAlphabet === squishedString ? 'pangram' : 'not pangram';
}
