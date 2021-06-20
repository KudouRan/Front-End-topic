/**
 * 实现柯里化函数
 * @param {*} fn
 * @param  {...any} curryArgs
 * @returns
 */
function curry(fn, ...curryArgs) {
  return function (...args) {
    const newArgs = curryArgs.concat(args);
    if (fn.length === newArgs.length) {
      return fn.call(this, ...newArgs);
    }
    return curry.call(this, fn, ...newArgs);
  };
}

module.exports = {
  curry,
};
