// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    let isTrue = true;
    for (let i = 0; i < str.length; i++) {
      for (let y = 0; y < str.length; y++) {
        if (str[i].toLowerCase() === str[y].toLowerCase() && i !== y) {
          isTrue = false;
        }
      }
    }
    return isTrue;
}

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}