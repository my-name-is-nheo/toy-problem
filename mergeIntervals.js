/*

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/
var merge = function (intervals) {
  //input array of arrays, each element with two numbers
  //array of arrays
  //contraint
  // patterns I'm seeing
  //assuming the length of intervals is even,
  // if the last element of one array is less than the first element of the next array.
  // or
  // if the element of the one array is equal to the first element of the next array
  // push the first element of the first array and last element of the last array into arrayToPush
  if (intervals.length < 2) {
    return intervals;
  }
  // var finalArray = [],
  //   thisArray,
  //   otherArray;
  // for (var index = 0; index < intervals.length; index = index + 2) {
  //   thisArray = intervals[index];
  //   otherArray = intervals[index + 1];
  //   if (thisArray[1] === otherArray[1]) {
  //     if (thisArray[0] > otherArray[0]) {
  //       finalArray.push(otherArray);
  //     } else {
  //       finalArray.push(thisArray);
  //     }
  //   } else {
  //     if (thisArray[1] === otherArray[0] || thisArray[1] > otherArray[0]) {
  //       finalArray.push([thisArray[0], otherArray[1]]);
  //     } else {
  //       finalArray.push(thisArray, otherArray);
  //     }
  //   }
  // }
  // return finalArray;

  var finalArray = [],
    thisArray,
    otherArray,
    min,
    max;
  for (var index = 0; index < intervals.length; index = index + 2) {}
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
