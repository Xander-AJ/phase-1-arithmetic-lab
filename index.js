// Define num1, num2, num3, and num4 as per the test cases
const num1 = 31;
const num2 = 2;
const num3 = 14;
const num4 = 10;

// Create a variable called multiply set to an equation that will multiply num1 and num2; the result should be 62.
const multiply = num1 * num2;

// Generate a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1;

// Create a variable called mod set to an equation that calculates the remainder of dividing num3 by num4; the remainder should be 4.
const mod = num3 % num4;

// Create a variable called max that finds the highest number in a set; the value returned should be 20.
const max = Math.max(5, 10, 15, 20);

module.exports = {
  multiply,
  random,
  mod,
  max,
};
