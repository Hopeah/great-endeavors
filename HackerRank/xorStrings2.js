// Task

// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
// Debug the given function strings_xor to find the XOR of the two given strings appropriately.
// Note: You can modify at most three lines in the given code and you cannot add or remove lines to the code.
// To restore the original code, click on the icon to the right of the language selector.

process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
});
process.stdin.on('end', function () {
  // now we can read/parse input
  let string = '';
  let stringArr = input.split('\n');
  let stringOne = stringArr[0].split('');
  let stringTwo = stringArr[1].split('');
  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      string += '1';
    } else {
      string += '0';
    }
  }

  console.log(string);
});
