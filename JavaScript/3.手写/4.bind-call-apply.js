/**
 * bind 不支持使用new调用新创建的构造函数
 * @param {*} fn
 * @param {*} thisArg
 * @param  {...any} argArray
 */
function bindNotNew(fn, thisArg, ...argArray) {
  const newArg = argArray;
  return function (...args) {
    return fn.apply(thisArg, newArg.concat(args));
  };
}

function bind(fn, thisArg, ...argArray) {
  const baseArgs = argArray;
  const baseArgsLength = baseArgs.length;
  fNOP = function () {};
  fBound = function (...args) {
    baseArgs.length = baseArgsLength;
    baseArgs.push.apply(baseArgs, args);
    return fn.apply(
      fNOP.prototype.isPrototypeOf(this) ? this : thisArg,
      baseArgs
    );
  };
  if (fn.prototype) {
    fNOP.prototype = fn.prototype;
  }
  fBound.prototype = new fNOP();
  return fBound;
}

function call(fn, thisArg, ...argArray) {
  // 因为是 node 环境测试，所以用的 globalThis 而不是 window
  if (!thisArg) thisArg = globalThis;
  // thisArg.fn = fn;
  // 用 Symbol 优化一下 fn 可能冲突的问题
  const tempFuncName = Symbol('临时函数');
  thisArg[tempFuncName] = fn;
  const result = thisArg[tempFuncName](...argArray);
  delete thisArg[tempFuncName];
  return result;
}

function apply(fn, thisArg, argArray) {
  if (!thisArg) thisArg = globalThis;
  if (!Array.isArray(argArray)) argArray = [];
  const tempFuncName = Symbol('临时函数');
  thisArg[tempFuncName] = fn;
  const result = thisArg[tempFuncName](...argArray);
  delete thisArg[tempFuncName];
  return result;
}

module.exports = { bind, call, apply, bindNotNew };
