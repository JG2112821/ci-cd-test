/**
 * Simple calculator module for CI/CD testing
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};

// Run as standalone if executed directly
if (require.main === module) {
  console.log('CI/CD Test Application');
  console.log('======================');
  console.log('Calculator Functions:');
  console.log('5 + 3 =', add(5, 3));
  console.log('5 - 3 =', subtract(5, 3));
  console.log('5 * 3 =', multiply(5, 3));
  console.log('6 / 3 =', divide(6, 3));
}
