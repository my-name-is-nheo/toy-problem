/*
Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Example:
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"
*/

var odd_or_even = (arr) => {
  if (arr.length === 0) {
    return "even";
  }
  var sum = 0;
  for (var index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  if (sum % 2 === 0) {
    return "even";
  }
  return "odd";
};
console.log(odd_or_even([0]));
console.log(odd_or_even([0, 1, 4]));
console.log(odd_or_even([0, -1, -5]));
