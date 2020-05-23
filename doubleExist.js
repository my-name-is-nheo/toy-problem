// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
var checkIfExist = function (arr) {
  /*
I - array
O -boolean
C -
i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
E
Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.

// first iterate over the array and see if current element equal to 2 x other elements
   */

  for (var i = 0; i < arr.length; i++) {
    var iElement = arr[i];
    for (var j = 0; j < arr.length; j++) {
      var jElement = arr[j];
      if ((jElement = 2 * iElement)) {
        return true;
      }
    }
  }
  return false;
};
