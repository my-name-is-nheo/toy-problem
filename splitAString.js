// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

var balancedStringSplit = function (s) {
  //I - string
  //O - integer
  //C - i < s.length < 1000 , s[i] = L or R in string makes sense
  //E
  /*
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
*/
  let matches = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      balance -= 1;
    } else if (s[i] === "L") {
      balance += 1;
    }

    if (balance === 0) {
      matches += 1;
    }
  }
  console.log(`there are ${matches} matches`);
  return `there are ${matches} matches`;
};

balancedStringSplit("RL");
balancedStringSplit("RRLL");
balancedStringSplit("RLRLLR");
balancedStringSplit("RLRRLL");
balancedStringSplit("L");
