function forEach(array, callbackfn) {
  for (let i = 0; i < array.length; i++) {
    callbackfn(array[i], i, array);
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
  if (array.length < 1) {
    return undefined;
  }
  const res = array[array.length - 1];
  --array.length;
  return res;
}

function filter() {}

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
