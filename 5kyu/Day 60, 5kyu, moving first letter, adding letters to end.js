// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//PREP

//P - parameters 
//A string with multiple letters, punctuation

//R - returns
//Return a string with first letter of each word moved to the end + add 'ay' to the end as well, everything else should stay the same

//E - examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//P - pseudocode

function pigIt(str){
    //Split into an array
    let array = str.split(' ')
    //Account for punctuation to not add additional letters there
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    //Map each word, do word => word.slice(1) + word[0] + 'ay'
    //Return a joined array 
    return array.map(word => {
        if (punctuation.indexOf(word) === -1) {
            return word.slice(1) + word[0] + 'ay'
        }
        return word
    }).join(' ')
}



