/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.
*/

var isIntArray = (arr) => {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return true;
    } else {
      var result;
      for (var index = 0; index < arr.length; index++) {
        var currentElement = arr[index];
        if (currentElement === null) {
          return false;
        }

        if (Number.isInteger(currentElement) || currentElement % 1 === 0) {
          result = true;
        } else {
          return false;
        }
      }
      return result;
    }
  }
  return false;
};
