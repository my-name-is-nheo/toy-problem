/*
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1
"aab" -> 2
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/
var longestPalindrome = (s) => {
  // //your code here
  // if (s.length === 0) {
  //   return 0;
  // }
  // if (s.length === 1) {
  //   return 1;
  // }
  // var total = 0;
  // var splittedString = s.toLowerCase().split(" ").join(""); // will account for sentences
  // var checkString = "";
  // for (var index = 0; index < splittedString.length; index++) {
  //   checkString += splittedString[index];
  //   if (checkString.length > 1) {
  //     if (checkString === checkString.split("").reverse().join()) {
  //       total += checkString.length;
  //       checkString = "";
  //     }
  //   }
  // }
  let isPalindrome = (str) => str.split("").reverse().join("") === str;

  for (let i = s.length; i >= 0; i--) {
    for (let j = s.length - i; j >= 0; j--) {
      if (isPalindrome(s.substr(j, i))) {
        return i;
      }
    }
  }
};
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aab"));
console.log(longestPalindrome("abcde"));
console.log(longestPalindrome("zzbaabcd"));
console.log(longestPalindrome(""));
