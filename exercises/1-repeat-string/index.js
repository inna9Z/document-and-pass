/**
 *
 */
const repeatString = (str, repeat) => {
  if (repeat < 0) {
    return "ERROR";
  }
  return str.repeat(repeat);

  //   let repeatedString = '';
  //   for (let i = 0; i < num; i++) {
  //     repeatedString += str;
  //   }

  //   return repeatedString;
};

module.exports = repeatString;
