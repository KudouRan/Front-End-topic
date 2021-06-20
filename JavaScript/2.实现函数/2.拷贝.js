/**
 * 浅克隆
 * @param {*} object
 */
function clone(object) {
  if (typeof object !== 'object') {
    return object;
  }
  return { ...object };
}

/**
 * 深克隆
 * @param {*} object
 */
function deepClone(object) {
  if (typeof object !== 'object') {
    return object;
  }

  const res = Array.isArray(object) ? [] : {};
  for (const key in object) {
    const value = object[key];
    res[key] = typeof value === 'object' ? deepClone(value) : value;
  }

  return res;
}

module.exports = {
  deepClone,
  clone,
};
