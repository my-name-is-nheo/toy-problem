/*

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
function accum(s) {
  // your code
  //input string
  //output string
  // constraints parameter of accum is a string which includes only letters from a-z and A-Z
  var cappedStr = s.toUpperCase();
  var printNumber = 1;
  var finalStory = "";

  for (var index = 0; index < cappedStr.length; index++) {
    if (index === 0) {
      finalStory += cappedStr[index];
      printNumber++;
    } else {
      finalStory += "-";
      finalStory =
        finalStory +
        cappedStr[index] +
        cappedStr[index].toLowerCase().repeat(printNumber - 1);

      printNumber++;
    }
  }
  return finalStory;
}
console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
