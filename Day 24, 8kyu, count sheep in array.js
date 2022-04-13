// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.forEach(sheep => {
      if (sheep === true) {
        count += 1
      }
    })
    return count
}

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}