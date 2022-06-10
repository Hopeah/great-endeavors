// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

//PREP

//P - parameters
//Given an array that consists of nested arrays that contain two numbers, non-negative integers, first - people entering, second - people leaving

//R - returns 
//Return the number of people left after the last stop (last array), cannot be negative

//E - examples
//

//P - pseudocode

function number(busStops) {
    //Flatten the array
    const flat = busStops.flat()
    //Have one variable that contains filtered and reduced values from the even indecies 
    const stay = flat.filter((number, index) => index%2 === 0).reduce((p, c) => p + c, 0).join('')
    //Have second variable that contains filtered and reduced values from the odd indecies
    const leave = flat.filter((number, index) => index%2 === 1).reduce((p, c) => p + c, 0).join('')
    //Subtract the two
    return Number(stay) - Number(leave)
}

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0)