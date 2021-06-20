const { forEach } = require('./3.数组方法手写');

test('测试自己的for forEach', () => {
  const items = [1, 2, 4];
  const copy = [];

  forEach(items, (item) => {
    copy.push(item);
  });

  expect(copy).toEqual(items);
});
