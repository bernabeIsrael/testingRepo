test('test object', () => {
  const data = { name: 'isra' };
  data.lastName = 'bernabe';
  expect(data).toEqual({ name: 'isra', lastName: 'bernabe' });
});
