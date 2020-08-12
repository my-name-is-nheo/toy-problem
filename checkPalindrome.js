function checkPalindrome(string) {
  // the question to ask. is the string equal  to the string.reverse?

  return string == string.split("").reverse().join("");
}
