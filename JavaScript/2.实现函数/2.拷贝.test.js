const { clone, deepClone } = require('./2.拷贝');

test('拷贝测试', () => {
  const obj = {
    a: { c: 456 },
    b: 123,
  };

  const obj1 = clone(obj);
  const obj2 = deepClone(obj);

  // 对比对象属性
  expect(obj1.a === obj.a).toBeTruthy();
  expect(obj2.a === obj.a).toBeFalsy();

  // 对比内容
  expect(obj1.a.c === obj.a.c).toBeTruthy();
  expect(obj2.a.c === obj.a.c).toBeTruthy();
});
