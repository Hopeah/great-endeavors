// Task
// You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.

function flippingBits(n) {
  // Write your code here
  n = n >>> 0;

  return ~n >>> 0;
}
