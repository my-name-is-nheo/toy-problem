/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  // input string
  //output vowelsCount === number of vowels
  //Constraints = will only consist of lowercase letters and/or spaces
  var string = str.toLowerCase().replace("/ /g", "");
  var vowelArray = ["a", "e", "i", "o", "u"];
  var vowelsCount = 0;
  for (var i = 0; i < string.length; i++) {
    var currentCharacter = string[i];
    for (var j = 0; j < vowelArray.length; j++) {
      var currentVowel = vowelArray[j];
      if (currentCharacter === currentVowel) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}
