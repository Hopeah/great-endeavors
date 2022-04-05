// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    while (s.includes("!")) {
      s = s.replace("!","")
    }
    return s;
}

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}