const { NotImplementedError } = require('../extensions/index.js');


/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 const MODERN_ACTIVITY = 15;
 const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  const lnTwo = 0.693
  let numberSampleActivity = parseFloat(sampleActivity);
  if (typeof(sampleActivity) === 'string' && numberSampleActivity > 0 && numberSampleActivity < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity))/(lnTwo / HALF_LIFE_PERIOD))
    } else {
      return false;
    }
  }

module.exports = {
  dateSample
};
