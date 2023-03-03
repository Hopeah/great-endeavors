// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

//Input
//An array always consiting of 3 elements

//Output
//An original array that has last element and first element swapped

function fixTheMeerkat(arr) {
    //Create an array to store our fixed meerkat
    let fixedMeerkat = []
    //Loop from the back through the original array and place elements into new array with each iteration
    for (let i = 2; i >= 0; i--) {
        fixedMeerkat.push(arr[i])
    }
    //Return the new array
    return fixedMeerkat
}