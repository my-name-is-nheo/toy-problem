/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/
function solution(string) {
  var newString = string.split("");
  for (var index = 0; index < newString.length; index++) {
    var currentChar = newString[index];
    if (currentChar === currentChar.toUpperCase()) {
      newString[index] = ` ${currentChar}`;
    }
  }
  return newString.join("");
}
console.log(solution("camelCasing"));
console.log(solution("hiNickAndKaren"));
