// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Enjoy it!!

//PREP

//P - parameters
//Given two integers (always positive?)

//R - returns
//Return an array consisting of numbers between the two given integers (inclusive) whose sum of individual digits raised to the power of their position in the number equals to the integer itself

//E - examples
// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// sumDigPow(90, 100) == []

//P - pseudocode

function sumDigPow(a, b) {
    //Create an array to store the integers that follow the requirement in
    let eureka = []
    //Loop through the numbers 
    for (let i = a; i <= b; i++) {
        //Convert the number being examined to string
        const stringed = i.toString()
        //Create a sum of individual numbers
        let sum = 0
        for (let i = 0; i < stringed.length; i++) {
            sum += Number(stringed[i])**(i+1)
        }
        //If the sum equals to the original number -> add to an array
        if (sum === i) {
            eureka.push(i)
        }
    }
    //Return the array
    return eureka
}
  
function sumDigPow(a, b) {
    var ans = [];
    while(a <= b){
      if(a.toString().split('').reduce((x,y,i)=>x + +(y ** (i + 1)),0) == a) // should be ((x,y,i)=>x + +y ** (i + 1),0) but VSCode throwing an error
        ans.push(a);
      a++;
    }
    return ans;
}