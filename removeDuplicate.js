function removeDuplicate(arr) {
  // input will be array of numbers
  // output should return an array with no duplicates
  // constraints none listed.. assuming any number will do.

  var exist = {},
    finalArray = [],
    currentElement;

  for (var index = 0; index < arr.length; index++) {
    currentElement = arr[index];
    if (!exist[currentElement]) {
      finalArray.push(currentElement);
      exist[currentElement] = true;
    }
  }
  return finalArray;
  // if you want to sort the array in accending order
  // .sort((a, b) => {
  //   return a - b;// ascending order
  // return b-a;// descending order
  // });
}

console.log(
  removeDuplicate([
    12,
    3,
    3,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    5,
    6,
    6,
    6,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
  ])
);
