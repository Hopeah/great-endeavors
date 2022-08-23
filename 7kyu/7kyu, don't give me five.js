// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// I have also created other katas. Take a look if you enjoyed this kata!

//PREP

//P - parameters
//Given two integers, could be negative, first one will always be smaller than the second one, they are inclusive

//R - returns
//Return how many numbers from the range do not include a number 5 in them

//E - examples
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

//P - pseudocode

function dontGiveMeFive(start, end) {
    //Create a variable that will hold a counter to how many numbers don't contain 5s
    let counter = 0;
    //Loop from the start number to the end number
    for (let i = start; i <= end; i++) {
        //Check every number by converting to a string and using method includes
        if (!i.toString().includes('5')) {
            counter++
        }
    }
    //Return the counter
    return counter
}