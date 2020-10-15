/*


Task
Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.


*/

function leastLarger(a, i) {
  if (a.length === 0) {
    return -1;
  }
  var min = a[i];
  var greaterArray = [];
  for (var index = 0; index < a.length; index++) {
    var currentElement = a[index];
    if (currentElement > min) {
      greaterArray.push(index);
    }
  }

  if (greaterArray.length !== 0) {
    console.log("this is math.min ", Math.min(...greaterArray));
    return Math.min(...greaterArray);
  }
  console.log(" greaterArray is empty");
  return -1;
}

console.log(leastLarger([4, 1, 3, 5, 6], 0));
console.log(leastLarger([4, 1, 3, 5, 6], 4));
