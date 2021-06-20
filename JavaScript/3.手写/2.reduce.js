/**
 *
 * @param {*} array
 * @param {*} callbackfn
 * @param {*} initValue
 */
function reduce(array, callbackfn, initValue) {
  for (let index = 0; index < array.length; index++) {
    initValue = callbackfn(initValue, array[index], index, array);
  }
  return initValue;
}

module.exports = { reduce };
