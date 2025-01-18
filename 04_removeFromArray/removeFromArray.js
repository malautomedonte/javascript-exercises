const removeFromArray = function (arr, ...elements) {
  return arr.filter((val) => !elements.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
