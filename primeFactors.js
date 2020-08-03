function primeFactors(n) {
  var factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
      console.log(n);
    } else {
      divisor++;
    }
  }
  console.log(factors);
  return factors;
}
primeFactors(69); // equal [3,23]
