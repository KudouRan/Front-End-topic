const once = require('./1.once函数');

test('函数只能调用一次', () => {
  function saySome(message) {
    return message || 'Hi';
  }

  const fn1 = once(saySome);
  expect(fn1(1)).toBe(1);
  expect(fn1()).toBeUndefined();
});
