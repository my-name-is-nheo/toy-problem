/*

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
*/
var wordPattern = function (pattern, str) {
  // 2 inputs string, and string
  // Output: boolean
  // Constraints: both strings will be in lowercase
  // E look above
  var patternStorage = {};
  var splittedPattern = pattern.split(""); //["a", "b", "b", "a"]
  var splittedStr = str.split(" "); // ["dog", "dog" ,"dog","dog"]

  for (var i = 0; i < splittedPattern.length; i++) {
    var currentPattern = splittedPattern[i];
    if (
      patternStorage[currentPattern] === undefined &&
      Object.values(patternStorage).indexOf(splittedStr[i]) === -1
    ) {
      patternStorage[currentPattern] = splittedStr[i];
    } else {
      if (patternStorage[currentPattern] !== splittedStr[i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog")); //TRUE
console.log(wordPattern("abba", "dog cat cat fish")); //FALSE
console.log(wordPattern("aaaa", "dog cat cat dog")); //FALSE
console.log(wordPattern("abba", "dog dog dog dog")); //FALSE <=== breaking..
console.log(wordPattern("aaaa", "dog dog dog dog")); //TRUE
console.log(wordPattern("aaaa", "dog cat cat cat"));
