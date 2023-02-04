// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxCnt = -Infinity;
  let maxChar = "";

  str.split("").forEach((char) => {
    charMap[char] = 1 + (charMap[char] || 0);
  });

  for (let char in charMap) {
    if (charMap[char] > maxCnt) {
      maxCnt = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
