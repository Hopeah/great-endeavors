// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//PREP

//P - parameters
//An array, random letters, only 'n', 's', 'e', 'w'

//R - returns
//True if 10 letters, last 5 is the directional opposite to first 5 in reverse order; false if not

//E - example
// isValidWalk(['n', 's', 'e', 'e', 'w', 'e', 'w', 'w', 'n', 's'])
// isValidWalk(['n'])
// isValidWalk(['n', 's', 'e', 'e', 'w', 'e', 'w', 'e', 'n', 's'])

//P - Pseudocode

//Check if array has a length of 10
//Check if the amount of times walked in north direction = to the number in south, and east equals to west

function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    }
    let n = 0
    let s = 0
    let e = 0
    let w = 0
    for (let i = 0; i < 10; i++) {
        if (walk[i] == 'n') {
            n += 1
        } else if (walk[i] == 's') {
            s += 1
        } else if (walk[i] == 'e') {
            e += 1
        } else if (walk[i] == 'w') {
            w += 1
        }
    }
    if ((n === s) && (e === w)) {
        return true
    } else {
        return false
    }
}

function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}