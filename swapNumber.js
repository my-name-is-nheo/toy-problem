// How would you swap two numbers without using a temporary variable?
function swapNumber(a, b) {
  console.log(`this is before swap: a = ${a} b=${b}`);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log(`this is after swap: a = ${a} b=${b}`);
}

swapNumber(2, 3);
