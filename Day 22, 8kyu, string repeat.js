// Description:
// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    let repeatStr = ''
    for (let i = 1; i <= n; i++) {
      repeatStr += s
    }
    return repeatStr;
}

function repeatStr (n, s) {
    return s.repeat(n);
}