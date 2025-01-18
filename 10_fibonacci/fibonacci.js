const fibonacci = function (number) {
  number = parseInt(number);
  if (number === 0) return 0;

  if (number <= 0) return "OOPS";
  if (number === 1) return 1;

  let a = 1;
  let b = 1;

  for (i = 2; i < number; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
