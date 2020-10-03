const vowels = (string) => {
  let count = 0;
  const choices = ["a", "e", "i", "o", "u"];

  for (let character of string.toLowerCase())
    if (choices.includes(character)) count++;

  return count;
};

console.log(vowels("nick"));
