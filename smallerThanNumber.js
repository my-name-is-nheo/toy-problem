/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
*/
var smallerNumbersThanCurrent = function (nums) {
  /*
Input - array
output - array
constraints - 2<=nums.length <=500
              0<nums[index]<=100
edgecases
Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Input: nums = [7,7,7,7]
Output: [0,0,0,0]
*/

  if (nums.length > 0) {
    var newArray = [];
    for (var index = 0; index < nums.length; index++) {
      var total = 0;
      var currentElement = nums[index];
      console.log("since is currentElement ", currentElement);
      for (var p = 0; p < nums.length; p++) {
        if (currentElement > nums[p] && p != index) {
          total++;
        }
      }
      console.log("this is total ", total);
      newArray.push(total);
    }
  }
  console.log(newArray);
  return newArray;
};

smallerNumbersThanCurrent([7, 7, 7, 7]);
