const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  if (arr.length === 0) return 0;

  // let total = 0; // NOT NECESSARY!
  return arr.reduce((total, num) => total + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
