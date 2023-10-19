// Task
// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

function minimumBribes(q) {
  // Write your code here
  const chaos = q.filter((num, index) => q[index] > q[index - 1] + 4);
  const two = q.filter((num, index) => q[index] === q[index - 1] + 3);
  const one = q.filter((num, index) => q[index] === q[index - 1] + 2);
  let chaotic = chaos.length > 0;
  let num = two.length > 0 ? 2 : one.length > 0 ? 1 : 0;

  if (chaotic) {
    console.log('Too chaotic');
  } else {
    console.log(num);
  }
}

function minimumBribes(q) {
  let num = 0;
  let chaotic = false;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) chaotic = true;
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) num++;
    }
  }
  if (chaotic) console.log('Too chaotic');
  else console.log(num);
}
