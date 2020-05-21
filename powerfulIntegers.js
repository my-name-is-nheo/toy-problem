// Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.

// Return a list of all powerful integers that have value less than or equal to bound.

// You may return the answer in any order.  In your answer, each value should occur at most once.

var powerfulIntegers = function (x, y, bound) {
  /*
I = x, y - integers and one bound integer
O = should return an array of integers
C = x and y are integers greater than or equal to 1 and less than or equal to 100
    bount is greater than or equal to 0 and less than or equal to 10^6
E =


Input: x = 2, y = 3, bound = 10
Output: [2,3,4,5,7,9,10]
Explanation:
2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2

basically find all the combinations where x^ i + y^j is less than or equal to bound
create a variable equal to an array containing 2, x,x+1, y

*/

  var finalArray = [];
  for (var i = 0; i < 20 && Math.pow(x, i) <= bound; i++) {
    for (var j = 0; j < 20 && Math.pow(y, j) <= bound; j++) {
      var sum = Math.pow(x, i) + Math.pow(y, j);
      if (sum <= bound) {
        finalArray.push(sum);
      }
    }
  }
  return finalArray.sort((a, b) => {
    return a - b;
  });
};
