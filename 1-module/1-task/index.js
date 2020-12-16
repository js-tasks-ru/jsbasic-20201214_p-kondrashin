/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let x=1;
  for (let i = 1; i <= n; i++) {
    x *= i;
  }
  return x
}

