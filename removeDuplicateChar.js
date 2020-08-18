function removeDuplicateChar(str) {
  var finalObject = {};
  var finalArray = [];
  for (var index = 0; index < str.length; index++) {
    var currentLetter = str[index];
    if (!finalObject[currentLetter]) {
      finalObject[currentLetter] = 1;
    } else {
      finalObject[currentLetter]++;
    }
  }
  for (var key in finalObject) {
    if (finalObject[key] === 1) {
      finalArray.push(key);
    }
  }

  return finalArray.join("");
}

console.log(removeDuplicateChar("Learn more javascript dude"));
