/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
*/
var isValid = function (s) {
  /*
  I - string
  O - boolean
  C - empty string is considered valid
  E
  Input: "()"
  Output: true
  Input: "()[]{}"
  Output: true
  Input: "(]"
  Output: false
  Input: "([)]"
  Output: false
  Input: "{[]}"
  Output: true





   */

  var validObject = { "(": ")", "[": "]", "{": "}" };

  // first do the restrictions
  if (!s.length) return true;
  if (s.length === 1) return false;
  if (s.length % 2 !== 0) return false;
  var newArray = s.split("");
  var valid = false;
  var vArray = [];
  for (var index = 0; index < newArray.length; index++) {
    var currentCharacter = newArray[index];
    if (validObject[currentCharacter]) {
      vArray.push(validObject[currentCharacter]);
    }
  }
};
