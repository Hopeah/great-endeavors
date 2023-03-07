// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

//Input 
//A string, could be empty, could be Zach

//Output
//Return 0 for empty, return 18 for Zach

function howManyLightsabersDoYouOwn(name) {
    //tertiary condition ? if true do something : if false do something else
    return name === "Zach" ? 18 : 0
}