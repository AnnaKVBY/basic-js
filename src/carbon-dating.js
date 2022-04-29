const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

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
function dateSample(sampleActivity) {
  let num = Number(sampleActivity); 
  if (Number.isNaN(num) || num <= 0 || Number.isInteger(sampleActivity) || typeof sampleActivity === "symbol")  {
    return false;
  } else {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let n = Math.log(MODERN_ACTIVITY / num);
    let result = n / k;   
    return Math.ceil(result);
  }
}
module.exports = {
  dateSample
};
