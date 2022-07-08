// Write function bmi that calculates body mass index (bmi = weight / height**2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//PREP

//P - parameters
//Given two numbers, always positive, could be floats

//R - returns
//Need to return the category based on calculated BMI (weight/height**2)

//E - examples
//bmi(80, 1.80) -> "Normal"

//P - pseudocode

function bmi(weight, height) {
    //Calculate bmi = weight / height**2
    const bmi = weight / (height**2)
    //Return a string based on a bmi case
    if (bmi <= 18.5) {
        return 'Underweight'
    } else if (bmi <= 25.0) {
        return 'Normal'
    } else if (bmi <= 30.0) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
}
