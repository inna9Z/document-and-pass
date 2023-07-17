/**
 * Removes specified values from an array and returns a new array.
 *
 * @param {Array} array - The original array from which values will be removed.
 * @param {...*} valuesToRemove - The values to be removed from the original array.
 * @returns {Array} A new array with the specified values removed.
 */
const removeFromArray = (array, ...valuesToRemove) => {
  return array.filter((element) => !valuesToRemove.includes(element));
};

module.exports = removeFromArray;
