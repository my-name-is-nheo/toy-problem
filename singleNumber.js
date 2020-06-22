// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
var singleNumber = function (array) {
  /*
I - non-empty array
O - integer
C - none
E ;
[2,2,1] =1
[2,2,3,1,3,3,0] =0

*/

  let num = 0;
  for (let n of nums) {
    num ^= n;
  }
  return num;
};
var nums = [2, 2, 1];
singleNumber(nums);
//looked up bitwise operators
