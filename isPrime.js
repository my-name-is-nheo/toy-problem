function isPrime(n) {
  var divisor = 2;
  while (n > divisor) {
    if (n % divisor === 0) {
      // meaning its even
      console.log(`All is prime except ${n} is even!`);
      return false;
    } else {
      divisor++; // check the next number as the divisor
    }
  }
  return true;
}

isPrime(137);
isPrime(5);
isPrime(3);
isPrime(6);
isPrime(400);
isPrime(401);

// can you make this better? as of now, the divisor is increased 1 at a time. After three you can increase it by 2. If a number is divisible by any even number, it will be divisible by 2
