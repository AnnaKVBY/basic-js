const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {  
  let arr = [],
  counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        counter++;
    } else {        
        arr.push(counter,str[i]);  
        counter =1;      
    }
  }

  let result = arr.filter(el => el != 1)

return result.join("");


}

module.exports = {
  encodeLine
};
