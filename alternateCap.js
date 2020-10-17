/*

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.


*/
function capitalize(s) {
  var oddWord = "";
  var evenWord = "";
  while (evenWord.length < s.length) {
    for (var index = 0; index < s.length; index++) {
      if (index % 2 === 0) {
        evenWord = evenWord + s[index].toUpperCase();
      } else {
        evenWord = evenWord + s[index];
      }
    }
  }
  while (oddWord.length < s.length) {
    for (var index = 0; index < s.length; index++) {
      if (index % 2 === 1) {
        oddWord = oddWord + s[index].toUpperCase();
      } else {
        oddWord = oddWord + s[index];
      }
    }
  }
  return [evenWord, oddWord];
}
console.log(capitalize("abcdef"));
