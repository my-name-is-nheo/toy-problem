function firstNonRepeatChar(string) {
  var charCount = {};
  for (var index = 0; index < string.length; index++) {
    var currentLetter = string[index];
    if (!charCount[currentLetter]) {
      charCount[currentLetter] = 1;
    } else {
      charCount[currentLetter]++;
    }
  }

  for (var j in charCount) {
    if (charCount[j] === 1) {
      return j;
    }
  }
}
