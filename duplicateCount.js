/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
var duplicateCount = (string) => {
  var stringToLowerCase = string.toLowerCase();
  var container = {};
  var total = 0;
  for (var char in stringToLowerCase) {
    if (!container[stringToLowerCase[char]]) {
      container[stringToLowerCase[char]] = 1;
    } else {
      container[stringToLowerCase[char]]++;
    }
  }
  for (var key in container) {
    if (container[key] > 1) {
      total++;
    }
  }
  return total;
};
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("Indivisibilities"));
