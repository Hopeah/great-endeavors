// Write a function that checks if a given string (case insensitive) is a palindrome.

//Input
//Given a string, various word capitalization, no special symbols/characters, never empty

//Output
//True or false, depending on if a reverse of a string === string

function isPalindrome(x) {
    //convert to lowercase
    let lowerCaseX = x.toLowerCase()
    //compare original string to string.split('').reverse().join('')
    return lowerCaseX === lowerCaseX.split('').reverse().join('')
}