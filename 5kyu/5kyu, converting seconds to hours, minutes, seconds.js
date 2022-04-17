// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

//PREP

//P - parameters
//A non-negative integer, equals to or less than 35999

//R - returns
//Return a string that is hours:minutes:seconds (hours from 00 to 99, minutes from 00 to 59, seconds from 00 to 59) that equate to the amount of seconds passed as a parameter

//E - examples

//0 -> '00:00:00'
//59 -> '00:00:59'
//60 -> '00:01:00'

//P - pseudocode

function humanReadable (seconds) {
    //Create variables for hours, minutes, and seconds accumulation
    let hour = 0;
    let minute = 0;
    let second = 0;
    //1) If the remainder of the seconds divided by 3600 (to get hours) is NOT the same as starting seconds -> hours variable will equal to Math.floor(seconds/3600)
    if (seconds%3600 !== seconds) {
        hour = Math.floor(seconds/3600)
    }
    //2) If the remainder of the first equation divided by 60 (to get minutes) is NOT the same as the remainder -> minutes variable will equal to Math.floor(seconds%3600/60)
    if (seconds%3600%60 !== seconds%3600) {
        minute = Math.floor(seconds%3600/60)
    }
    //3) If the remainder of the second equation does NOT equal to 0 -> seconds variable will equal to seconds%3600%60
    if (seconds%3600%60 !== 0) {
        second = seconds%3600%60
    }
    return hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0')
}