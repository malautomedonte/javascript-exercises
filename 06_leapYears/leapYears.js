const leapYears = function (year) {
  const divisibleBy4 = year % 4 === 0;
  const century = year % 100 === 0;
  const divisibleBy400 = year % 400 === 0;

  if (divisibleBy4 && (!century || divisibleBy400)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
