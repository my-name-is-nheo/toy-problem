/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/

var kebabize = (str) => {
  // var wordContainer = [];
  // var wordToPush = "";
  // for (var index = 0; index < string.length; index++) {
  //   var currentChar = string[index];
  //   if (currentChar === currentChar.toUpperCase()) {
  //     wordContainer.push(wordToPush);
  //     wordToPush = "";
  //     wordToPush += currentChar;
  //   } else {
  //     wordToPush += currentChar;
  //   }
  // }
  // console.log(wordContainer);
  var nonumber = str.replace(/\d/g, "").split(/(?=[A-Z])/g);
  return nonumber.join("-").toLowerCase();
};
console.log(kebabize("camelsHaveThreeHumps"));
console.log(kebabize("camelsHave3Humps"));
