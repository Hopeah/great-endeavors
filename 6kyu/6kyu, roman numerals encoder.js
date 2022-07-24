// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

//PREP

//P - parameters
//Given a positive integer

//R - returns
//Return a string that contains a roman numberal representation of a given number

//E - examples
// solution(1000); // should return 'M'

//P - pseudocode

function solution(number){
    //Create an object key
    // const roman = {
    //     1000: 'M',
    //     900: 'CM',
    //     500: 'D',
    //     400: 'CD',
    //     100: 'C',
    //     90: 'XC',
    //     50: 'L',
    //     40: 'XL',
    //     10: 'X',
    //     9: 'IX',
    //     5: 'V',
    //     4: 'IV',
    //     1: 'I'
    // }

    //Create two arrays holding the keys
    const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    //Create a string which will hold roman numerals
    let converted = ''

    // //Loop through the object key
    // for (const numeral in roman) {
    //     //While the given number is bigger than the current key -> add the key value to the string, subtract the amount from the number
    //     while (number >= numeral) {
    //         converted += roman[numeral];
    //         number -= numeral
    //     }
    // }

    //Loop through the decimals using foreach
    decimals.forEach((value, index) => {
        while (number >= value) {
            converted += roman[index]
            number -= value
        }
    })
    //Return the string
    return converted
}

function solution(number){
    // convert the number to a roman numeral
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
}