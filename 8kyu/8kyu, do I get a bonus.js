// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

//PREP

//P - parameters
//Given two arguments, first - integer, second - boolean

//R - returns
//Return an integer that is either multiplied by 10 (if boolean is true), or as is. It should be prefixed with "£"

//E - examples
//bonusTime(25000, true) -> '£250000'
//bonusTime(60000, false) -> '£60000'

//P - pseudocode

function bonusTime(salary, bonus) {
    //Use ternary operator to check whether boolean is true or false
    //If true -> use template literal to adjust the value to times 10, if not - return the value with £ in front
    return bonus ? `£${salary*10}` : `£${salary}`
}