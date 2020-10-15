/*


Task
Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.


*/

function leastLarger(a, i) {
  // input arrray, index
  //output index of the least larger than the element at the given index
  // constraints : give index will be inside the array
  //: given array with never be empty

  var min = a[i]; //4
  var greaterThanMinArray = [];
  for (var index = 0; index < a.length; index++) {
    var currentElement = a[index];
    if (currentElement > min) {
      greaterThanMinArray.push(currentElement);
    }
  }

  if (greaterThanMinArray.length) {
    return a.indexOf(Math.min(...greaterThanMinArray));
  }

  return -1;
}

console.log(leastLarger([4, 1, 3, 5, 6], 0));
console.log(leastLarger([4, 1, 3, 5, 6], 4));
