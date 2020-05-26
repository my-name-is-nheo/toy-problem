// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures

var isUnique = function (s) {
  var existObj = {};
  for (var index = 0; index < s.length; index++) {
    if (existObj[s[index]]) {
      return false;
    }
    existObj[s[index]] = true;
  }
  return true;
};
