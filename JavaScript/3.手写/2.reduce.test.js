const { reduce } = require('./2.reduce');

test('自定义reduce', () => {
  expect(reduce([1, 2, 3, 4], (total, pre) => total + pre, 0)).toBe(10);
});
