function reverseInPlace(string) {
  return string.split(" ").reverse().join(" ").split("").reverse().join("");
}

console.log(reverseInPlace("hello I am a good boy"));
