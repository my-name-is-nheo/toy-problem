/*
Anagrams are words or phrases that contain the same number of characters.
*/
var isAnagram = (stringA, stringB) => {
  const sanitizeString = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("")
      .sort()
      .join("");
  };
  return sanitizeString(stringA) == sanitizeString(stringB);
};

console.log(isAnagram("hlle", "hell"));
console.log(isAnagram("silent", "listen"));
