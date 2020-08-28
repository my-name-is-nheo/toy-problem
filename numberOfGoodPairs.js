/*
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.



Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/
var numIdenticalPairs = (nums) => {
  var count = 0;
  var identical;
  var identicalCount = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        count++;
      }

      if (nums[i] == nums[j] && !(i < j)) {
        identical = true;
        identicalCount++;
      }
    }
  }
  console.log(identical);
  if (identical) {
    return identicalCount;
  }
  return count;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));