/**
 * Check if a given year is a leap year.
 *  @param {number} year The year to check
 *  @return {boolean} Whether the year is a leap year
 */
const leapYears = function (year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

module.exports = leapYears;
