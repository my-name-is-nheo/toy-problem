var isPalindrome = (string) => {
  return (
    string.toLowerCase() === string.split("").reverse().join("").toLowerCase()
  );
};

console.log(isPalindrome("Anna"));

console.log(isPalindrome("Civic"));
console.log(isPalindrome("mom"));

console.log(isPalindrome("Nick"));
