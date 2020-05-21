/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
*/

var isIsomorphic = function (s, t) {
  //I - two arguments, both string type
  //O - true or false
  //C - s and t will have the same length. will be a string as well.
  //E -
  /*

  "egg" "add" // true
  e -> a
  g -> d



  */
  if (s.length !== t.length) {
    return false;
  }
  var countS = {};
  for (var index = 0; index < s.length; index++) {
    if (countS[s[index]] === undefined) {
      countS[s[index]] = 1;
    } else {
      countS[s[index]]++;
    }
  }

  var countT = {};
  for (var j = 0; j < t.length; j++) {
    if (countT[t[j]] === undefined) {
      countT[t[j]] = 1;
    } else {
      countT[t[j]]++;
    }
  }
  var sArray = Object.values(countS);
  var tArray = Object.values(countT);
  for (var i = 0; i < sArray.length; i++) {
    for (var k = 0; k < tArray.length; k++) {
      if (sArray[i] === tArray[k]) {
        return true;
      }
    }
  }
  return false;
};
