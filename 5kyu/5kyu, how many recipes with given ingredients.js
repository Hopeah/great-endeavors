// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

//PREP

//P - parameters
//Given two objects, first one -> recipe, second one -> ingredients

//R - returns
//Return the maximum amount of recipes that could be done with the ingredients, smallest whole number

//E - examples
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}) -> 2
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}) -> 0

//P - pseudocode

function cakes(recipe, available) {
    //Create a variable to store max amount of cakes
    let maxCakes
    //Get the keys out of the recipe object and put them in the keys array
    const keys = Object.keys(recipe)
    //Go through the entire array and compare the amount of ingredients by dividing recipe/ingredient, rounded down to the nearest whole number
    for (let i = 0; i < keys.length; i++) {
        //If the key is not present in the ingredients -> return 0
        if (!available[keys[i]]) {
            return 0
        } else if (recipe[keys[i]] > available[keys[i]]) {
            return 0
        } else if (recipe[keys[i]] <= available[keys[i]]) {
            let currentCakes = Math.floor(available[keys[i]]/recipe[keys[i]])
            //Compare the max amount of cakes variable to the current max, if it's more -> change it to the current max
            if (!maxCakes) {
                maxCakes = currentCakes
            }
            if (currentCakes < maxCakes) {
                maxCakes = currentCakes
            }
        }
    }
    return maxCakes
}

function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
}

const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)