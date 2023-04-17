const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let num = 1;
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if(Array.isArray(item)){
        num = 1;
        num += this.calculateDepth(item)
      }
      result = Math.max(result, num)
    }
    return result;
  }
}

module.exports = {
  DepthCalculator
};
