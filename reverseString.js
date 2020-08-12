function reverseString(string) {
  if (!string || string.length < 2) {
    return string;
  }

  console.log(
    "this is your reverse string ",
    string.split("").reverse().join("")
  );
  return string.split("").reverse().join("");
}

reverseString("nick");
reverseString("karen");
