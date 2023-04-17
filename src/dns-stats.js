const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

// domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'];
function getDNSStats(domains) {
  let obj = {}
  for (let i = 0; i < domains.length; i ++) {
    let str = '';
    const arr = domains[i].split('.').reverse();
    for (let j = 0; j < arr.length; j ++) {
      str += `.${arr[j]}`
      obj[str] = obj[str] + 1 || 1
    }
  }
return obj
// console.log (obj)
}

module.exports = {
  getDNSStats
};
