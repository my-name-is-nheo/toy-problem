function printerError(s) {
  const goodString = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
  ];
  var total = s.length;
  var mistakes = 0;
  for (var index = 0; index < s.length; index++) {
    var currentChar = s[index];
    if (goodString.indexOf(currentChar) < 0) {
      mistakes++;
    }
  }
  return `${mistakes}/${total}`;
}
console.log(printerError("aaabbbbhaijjjm"));
