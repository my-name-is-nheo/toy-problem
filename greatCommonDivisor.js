function greatestCommonDivisor(x, y) {
  if (y == 0) {
    return x;
  } else {
    console.log("this the entered y ", y);
    console.log("this is entered x ", x);
    console.log("this is x%y ", x % y);
    console.log(
      `this is the new recursion greatestCommonDivisor(${y},${x % y})`
    );
    return greatestCommonDivisor(y, x % y);
  }
}
//How would you find the greatest common divisor of two numbers?
greatestCommonDivisor(14, 21);
/*
starting greatestCommonDivisor(14,21)
so for any modulo, x % y , if x is less than y, it'll return x

so in the beginning of the problem, if x is less than y, just think of it returning the same function with the inputs switched
so
greatestCommonDivisor(14, 15) ===> greatestCommonDivisor(15,14)
greatestCommonDivisor(15,16) ====> greatestCommonDivisor(16,15)

now back to the original problem,
first will return greatestCommonDivisor(21,14)
second will return greatestCommonDivisor(14, 7 (21%14===7))
next will return greatestCommonDivisor(7,0 (14%7===))
according to the condition, if y===0 , it'll return x so this will return x
*/
