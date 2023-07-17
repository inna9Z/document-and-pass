/**
 * Calculate the sum of all numbers within a given range (inclusive).
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @returns {number|string} The sum of numbers within the range or "ERROR" if parameters are invalid.
 */

function sumAll(start, end) {
  // Check if the parameters are valid numbers
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }

  let sum = 0;

  // Determine the lower and upper bounds of the range
  const lower = start < end ? start : end;
  const upper = start < end ? end : start;

  // Calculate the sum of numbers within the range
  for (let i = lower; i <= upper; i++) {
    sum += i;
  }

  return sum;
}

module.exports = sumAll;
