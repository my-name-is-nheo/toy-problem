var vowels = (string) => {
  var numberOfVowels = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  var newString = string.toLowerCase();
  for (var character in newString) {
    if (vowels.includes(character)) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
};
