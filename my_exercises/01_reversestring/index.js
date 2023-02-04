// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const mid = Math.floor(str.length / 2);
  str = str.split("");
  for (let i = 0; i < mid; i++) {
    const temp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = temp;
    debugger;
  }
  return str.join("");
}

module.exports = reverse;

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// function reverse(str) {
//   return str.split("").reduce((reversed, character) => character + reversed, '');
// }
