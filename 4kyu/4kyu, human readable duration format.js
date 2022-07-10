// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

//PREP

//P - parameters
//Given a non-negative integer, could be 0, that specifies seconds

//R - returns
//Return the amount of seconds as a combination of years, days, hours, minutes and second, if they can be broken down that way
//Year = 365 days = 31536000,
//Day = 24 hours = 86400,
//Hour = 60 minutes = 3600,
//Minute = 60 seconds

//E - examples
// * 62 -> "1 minute and 2 seconds"
// * 3662 -> "1 hour, 1 minute and 2 seconds"

//P - pseudocode

function formatDuration (seconds) {
    //Create an object holding all conversions
    const conversions = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    }
    //Create a variable to hold all found formats
    let humanRead = []
    //Case if seconds are zero, should return 'now'
    if (seconds === 0) {
        return 'now'
    }
    //Loop through the object
    for (let time in conversions) {
        //Find if the current seconds are larger than the value stores in the object
        if (seconds >= conversions[time]) {
            //If yes -> divide the seconds by the value in the key, round with floor to the nearest smallest integer
            let converted = Math.floor(seconds/conversions[time])
            //Push the value to the array in such a way that it follows the appropriate wording, if > 1 => number + ' ' + object[key] + 's'; if 1 => numbers + object[key]
            humanRead.push(converted += converted > 1 ? ' ' + time + 's' : ' ' + time)
            //Store the leftover remainder of the division in the seconds
            seconds = seconds%conversions[time]
        }
    }
    //If an array contains more than one entry, return joined array (by ,), otherwise return the first entry in the array
    return humanRead.length > 1 ? humanRead.join(', ').replace(/,([^,]*)$/,' and'+'$1') : humanRead[0]
}