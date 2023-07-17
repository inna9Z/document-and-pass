/**
 *
 */
const fibonacci = (n) => {
  if (n < 0) {
    return "OOPS";
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

module.exports = fibonacci;
