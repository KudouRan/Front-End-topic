const { forEach, push, pop, filter } = require('./3.数组方法手写');

test('测试自己的 for forEach', () => {
  const items = [1, 2, 4];
  const copy = [];

  forEach(items, (item) => {
    copy.push(item);
  });

  expect(copy).toEqual(items);
});

test('测试自己的 push', () => {
  const vegetables = ['parsnip', 'potato'];
  const moreVegs = ['celery', 'beetroot'];

  let len = push(vegetables, 'eggplant');

  expect(len).toBe(vegetables.length);
  expect(vegetables).toEqual(['parsnip', 'potato', 'eggplant']);
  // push 空
  expect(push(vegetables)).toBe(3);

  // 拼接对象 (模仿 Array.prototype.push.apply)
  push.apply(undefined, [vegetables, ...moreVegs]);
  expect(vegetables).toEqual([
    'parsnip',
    'potato',
    'eggplant',
    'celery',
    'beetroot',
  ]);
});

test('测试自己的 pop', () => {
  const arr = [2, 4, 6, 8, 10];
  const eArr = [];
  const likeArr = { 0: 1, 1: 2, 2: 3, length: 3 };

  expect(pop(arr)).toBe(10);
  expect(arr).toEqual([2, 4, 6, 8]);
  expect(arr.length).toEqual(4);

  // 删除空数组
  expect(pop(eArr)).toBeUndefined();

  // 操作类数组
  expect(pop(likeArr)).toBe(3);
  expect(likeArr).toEqual({ 0: 1, 1: 2, length: 2 });
});

test('测试自己的 filter', () => {
  const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
  ];

  const result = filter(words, (word) => word.length > 6);
  expect(result).toEqual(['exuberant', 'destruction', 'present']);
});
