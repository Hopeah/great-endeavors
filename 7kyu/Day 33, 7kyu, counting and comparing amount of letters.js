// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
    let low = str.toLowerCase();
    let countO = 0;
    let countX = 0;
    for (let i = 0; i < str.length; i++) {
      if (low[i] == 'o') {
        countO += 1
      } else if (low[i] == 'x') {
        countX += 1
      }
    }
    return countO == countX
}

XO('xxOo')