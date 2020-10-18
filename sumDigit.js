/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
*/
var sumDigits = (number) => {
  var numberToString = Math.abs(number).toString();

  var sum = 0;
  for (var index = 0; index < numberToString.length; index++) {
    sum += parseInt(numberToString[index]);
  }

  return sum;
};

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));
