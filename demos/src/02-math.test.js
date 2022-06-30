const {
  sum, multiply, divide, average,
} = require('./02-math');

test('testing adicion', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('testing multiplicity', () => {
  const rta = multiply(2, 3);
  expect(rta).toBe(6);
});

test('testing divide', () => {
  const rta = divide(4, 2);
  expect(rta).toBe(2);
});

test('testing dividing by zero', () => {
  const rta = divide(4, 0);
  expect(rta).toBe(null);
});

test('should get average', () => {
  const numbers = [2, 5, 7, 2, 9];
  const rta = average(numbers);
  expect(rta).toBe(5);
});

test('should get average of an empty array', () => {
  const numbers = [];
  const rta = average(numbers);
  expect(rta).toBe(0);
});
