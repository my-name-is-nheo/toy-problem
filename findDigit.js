/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

*/

var findDigit = (num, nth) => {
  // var numReversed = parseInt(
  //   num.toString().split("").reverse().join("")
  // ).toString();
  // if (nth <= 0) {
  //   return -1;
  // }
  // if (nth > numReversed.length) {
  //   return 0;
  // }
  // return parseInt(numReversed[nth - 1]);
  if (nth <= 0) return -1;
  if (nth > arr.length) return 0;
  let arr = Math.abs(num).toString().split("");
  return Number(arr[arr.length - nth]);
};
console.log(findDigit(5673, 4));
console.log(findDigit(129, 2));
console.log(findDigit(-2825, 3));
console.log(findDigit(-456, 4));
console.log(findDigit(0, 20));
console.log(findDigit(65, 0));
console.log(findDigit(24, -8));
