/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
where a ** b means a to the power of b

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

var primeFactorsII = (number) => {
  var divisible = 2;
  var arrayOfDivisibles = [];
  while (divisible <= number) {
    if (number % divisible === 0) {
      if (divisible === Math.sqrt(divisible) ** 2) {
        arrayOfDivisibles.push(Math.sqrt(divisible));
      } else {
        arrayOfDivisibles.push(divisible);
      }
    }

    divisible++;
  }
  console.log(
    arrayOfDivisibles.filter((num) => {
      return num % 1 === 0;
    })
  );
};
console.log(primeFactorsII(86240));
