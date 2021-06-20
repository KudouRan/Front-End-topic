/**
 * 只执行一次的函数
 * @param {*} fn
 */
module.exports = function once(fn) {
  let flag = true;
  return function (...arg) {
    if (flag) {
      const res = fn.apply(fn, arg);
      flag = false;
      return res;
    }
  };
};
