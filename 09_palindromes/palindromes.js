const palindromes = function (string) {
  const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleanedString.split("").reverse().join("");

  return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
