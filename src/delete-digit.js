const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString(10).split('').map(el => parseInt(el, 10));
  let result = Math.max(...arr.map((el,i)=>{let res = arr.slice(); res.splice(i,1); return +res.join('')}));
  return result; 
}



module.exports = {
  deleteDigit
};
