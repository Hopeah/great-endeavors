// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Good luck and enjoy!

//PREP

//P - parameters
//Given a lowcase string, could be empty, could be multiple words

//R - returns
//Return an array consisting of the string repetitions that have 1 capitalized letter starting from first in the first, second in the second, etc..

//E - examples
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//P - pseudocode
function wave(str){
    //Create an array to store the words in
    let waved = []
    //Create a loop depending on how many letters are in a word
    for (let i = 0; i < str.length; i++) {
        //If a loop is at the spot of a space in a word, continue through
        if (str[i] === ' ') {
            continue;
        }
        //Slice the previous part of the word + capitalize the letter of the word depending on the loop position + slice the rest of the word
        let word = str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1)
        //Push the new word to the array
        waved.push(word)
    }
    //Return the array
    return waved
}

function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}