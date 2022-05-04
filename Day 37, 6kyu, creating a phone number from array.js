// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let firstThree = numbers.slice(0,3).join('');
    let nextThree = numbers.slice(3,6).join('');
    let lastFour = numbers.slice(6).join('');
    return '(' + firstThree + ')' + ' ' + nextThree + '-' + lastFour
}

function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++) {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
}