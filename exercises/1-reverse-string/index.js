/**
 * reverse string
 * @param {String} -str - The input string to be reversed.
 * @return {string} - The reversed string.
 *
 */
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

module.exports = reverseString;
