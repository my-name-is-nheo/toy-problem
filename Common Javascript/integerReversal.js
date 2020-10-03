var integerReversal = (integer) => {
  return (
    parseInt(integer.toString().split("").reverse().join("")) *
    Math.sign(integer)
  );
};

console.log(integerReversal(1234));
console.log(integerReversal(4321));
