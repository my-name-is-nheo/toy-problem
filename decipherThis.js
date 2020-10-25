/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72 olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/
var decipherThis = (str) => {
  var splittedStr = str.split(" ");
  console.log(splittedStr);
  var finalArray = [];
  for (var index = 0; index < splittedStr.length; index++) {
    var currentWord = splittedStr[index];
    var numberArray = [];
    var wordArray = [];
    for (var j = 0; j < currentWord.length; j++) {
      var currentChar = currentWord[j];
      if (Number(currentChar) || Number(currentChar) === 0) {
        numberArray.push(Number(currentChar));
      } else {
        wordArray.push(currentChar);
      }
    }

    var newWord = [String.fromCodePoint(numberArray.join(""))];
    var temp = wordArray[0];
    wordArray[0] = wordArray[wordArray.length - 1];
    wordArray[wordArray.length - 1] = temp;
    finalArray.push(newWord.concat(wordArray));
  }
  console.log([].concat.apply([], finalArray));
};
console.log(decipherThis("72olle 103doo 100ya"));
console.log(decipherThis("82yade 115te 103o"));
