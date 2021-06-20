/**
 * 自己实现一个 new
 * @param {*} constructor
 * @param  {...any} arg
 */
module.exports = function newObj(constructor, ...arg) {
  if (typeof constructor !== 'function') {
    throw new TypeError('第一个参数必须是函数');
  }

  const obj = {};
  // obj.__proto__ = Object.create(constructor.prototype);
  Object.setPrototypeOf(obj, constructor.prototype);

  const res = constructor.apply(obj, arg);
  const isObject = typeof res === 'object' && res !== null;
  const isFunction = typeof res === 'function';

  return isFunction || isObject ? res : obj;
};
