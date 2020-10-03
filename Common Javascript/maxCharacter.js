var maxCharacter = (string) => {
  var charactersObject = {};
  for (var index = 0; index < string.length; index++) {
    var currentWord = string[index];
    if (charactersObject[currentWord] === undefined) {
      charactersObject[currentWord] = 1;
    } else {
      charactersObject[currentWord]++;
    }
  }

  var max = 0;
  var maxCharacter = null;
  for (var character in charactersObject) {
    if (charactersObject[character] > max) {
      max = charactersObject[character];
      maxCharacter = character;
    }
  }
  return `The max character is ${maxCharacter} with ${max} occurence(s)`;
};

console.log(maxCharacter("Hello World!"));
