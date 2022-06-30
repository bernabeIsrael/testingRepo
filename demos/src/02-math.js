function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function average(numbers) {
  let result = 0;

  if (numbers.length === 0) {
    return 0;
  }
  numbers.forEach((number) => {
    result += number;
  });
  return result / numbers.length;
}

module.exports = {
  sum,
  multiply,
  divide,
  average,
};
