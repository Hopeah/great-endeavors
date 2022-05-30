// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//PREP

//P - parameters
//A string of words (or empty), each word has a number within it

//R - returns
//Return a string that has words ordered by the numbers

// E - examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//P - pseudocode





//Cut the numbers out, join the array into a single string

function order(words) {
    if (!words) {
        return words
    }
    //Break into an array
    let wordArray = words.split(' ')
    //Create an array for word+number pair
    let sorted = []
    //Cycle through words to find a number that is hidden in them, add word+number in the newly created array
    wordArray.forEach(word => {
        //splitting every word in characters
        let singleWord = word.split('')
        //finding a number in the array of letters
        let number = singleWord.find(element => parseInt(element))
        //adding a word and its number to the new array
        sorted.push([word, number])
    })
    //Sort the new array by the numbers
    sorted.sort((a,b) => a[1] - b[1]).map(array => array.splice(1,1))
    return sorted.join(' ')
}

function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
}