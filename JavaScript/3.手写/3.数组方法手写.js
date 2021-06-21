function forEach(array, callbackfn, thisArg) {
  for (let i = 0; i < array.length; i++) {
    callbackfn.call(thisArg, array[i], i, array);
  }
}

function push(array, ...items) {
  let length = array.length;
  for (let index = 0; index < items.length; index++) {
    array[length] = items[index];
    length++;
  }
  return length;
}

function pop(array) {
  const len = array.length;
  if (len < 1) {
    return undefined;
  }
  const newLen = len - 1;
  const res = array[newLen];
  // 不能直接将长度变短来删除最后一个，这样在处理类数组时没有效果
  delete array[newLen];
  array.length = newLen;
  return res;
}

function filter(array, predicate, thisArg) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (predicate.call(thisArg, value, index, array)) {
      newArray.push(value);
    }
  }
  return newArray;
}

function sort() {}

function splice() {}

function map() {}

function flat() {}

module.exports = {
  forEach,
  push,
  map,
  pop,
  flat,
  filter,
  sort,
  splice,
};
