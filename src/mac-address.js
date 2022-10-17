const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split("-"); 
 
  if (n.length !== 17) return false;  
  for (let i=0; i<arr.length; i++) {    
    if((arr[i][0] >= '0' && arr[i][0] <= '9' || arr[i][0] >= 'A' && arr[i][0] <= 'F') && (arr[i][1] >= '0' && arr[i][1] <= '9' || arr[i][1] >= 'A' && arr[i][1] <= 'F')) {
      return true
    } else {return false}
  } 
 
}
module.exports = {
  isMAC48Address
};
