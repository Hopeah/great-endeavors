// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers

//PREP

//P - parameters
//Given a string, can be empty, contains numbers that are positive integers? could have leading/trailing whitespaces, could have more than a unique whitespace between two consecutive numbers

//R - returns
//Return a string with a single space between the numbers sorted by the "weight" of the numbers (so a sum of all single digits in a number), if two numbers have same weight, they should have "alphabetical ordering" (180 > 90)

//E - examples
// "56 65 74 100 99 68 86 180 90" -> "100 180 90 56 65 74 68 86 99"

//P - pseudocode

function orderWeight(strng) {
    //Create a function that converts a number to the sum of its digits, make sure to convert an integer to a number with a +
    const sum = num => num.split('').reduce((p, c) => p + +c, 0);
    //Create a function that will compare two numbers
    function compare(a, b) {
        //Get the sum of the two numbers using the first function
        let sumA = sum(a);
        let sumB = sum(b);
        //Return 0 (or a.localeCompare(b)) if the two sums are the same, return sumA - sumB otherwise
        return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    }
    //Split the given string using space, sort using the compare function, join with the space
    return strng.split(' ').sort(compare).join(' ');
}
