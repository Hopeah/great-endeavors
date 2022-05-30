// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    let arr = ['a','e','i','o','u']
    for (let i = 0; i < str.length; i++) {
      arr.forEach(letter => {
        if (letter == str[i]) {
          vowelsCount++
        }
      })
    }
    return vowelsCount;
}

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}