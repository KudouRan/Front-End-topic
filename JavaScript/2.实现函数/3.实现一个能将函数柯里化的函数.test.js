const { curry } = require('./3.实现一个能将函数柯里化的函数');

test('测试柯里化', () => {
  function add(a, b, c) {
    return a + b + c;
  }

  const curryAdd = curry(add);
  expect(curryAdd(1)(2, 3)).toBe(6);
  expect(curryAdd(1, 2)(3)).toBe(6);
  expect(curryAdd(1, 2, 3)).toBe(6);
  expect(curryAdd(1)(2, 3)).toBe(6);
});
