// Task
// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

function caesarCipher(s, k) {
  // Write your code hereconst lowerA = "abcdefghijklmnopqrstuvwxyz"
  const upperA = lowerA.toUpperCase();

  const encoudedString = s.split('').map((char) => {
    if (lowerA.includes(char)) {
      return lowerA[(lowerA.indexOf(char) + k) % 26];
    } else if (upperA.includes(char)) {
      return upperA[(upperA.indexOf(char) + k) % 26];
    } else {
      return char;
    }
  });

  return encodedString.join('');
}
