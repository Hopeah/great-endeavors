// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
    let count = 0;
    games.forEach(game => {
      let score = game.split(':');
      if (score[0] > score[1]) {
        count += 3
      } else if (score[0] === score[1]) {
        count += 1
      }
    })
    return count;
}

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)