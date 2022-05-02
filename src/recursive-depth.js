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
  calculateDepth(arr, count=0) {   
    let nArr =[];
    if (arr.length === 0) return count;
    for (let i=0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && arr[i].length !== 0) {
        nArr.push(...arr[i]);        
      } else if (Array.isArray(arr[i]) && arr[i].length === 0) {
        nArr.push("1");
      }
      
    } 

    return this.calculateDepth(nArr, count+1);  
    
  
  }
}

module.exports = {
  DepthCalculator
};
