function greatestCommonDivisor(x, y) {
  if (y == 0) {
    return x;
  } else {
    console.log("this the new y ", y);
    console.log("this the new x & y ", x % y);

    return greatestCommonDivisor(y, x % y);
  }
}
//How would you find the greatest common divisor of two numbers?
greatestCommonDivisor(14, 21);
