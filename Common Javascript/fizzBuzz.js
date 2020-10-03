var fizzBuzz = (integer) => {
  var output = [];

  for (var i = 1; i < integer; i++) {
    if (i % 6 === 0) {
      output.push("Fizz Buzz");
    } else if (i % 3 === 0) {
      output.push("Buzz");
    } else if (i % 2 === 0) {
      output.push("Fizz");
    } else {
      output.push(i);
    }
  }
  return output;
};

console.log(fizzBuzz(30));
