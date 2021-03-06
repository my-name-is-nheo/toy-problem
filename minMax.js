/*Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar. */

function minMax(arr) {
  if (arr.length === 1) {
    return arr.concat(arr);
  } else {
    var min = arr[0];
    var max = arr[1];
    var finalArray = [];
    for (var index = 0; index < arr.length; index++) {
      var currentElement = arr[index];
      if (currentElement < min) {
        min = currentElement;
      }
      if (currentElement > max) {
        max = currentElement;
      }
    }
    finalArray.push(min, max);
  }
  return finalArray;
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));
