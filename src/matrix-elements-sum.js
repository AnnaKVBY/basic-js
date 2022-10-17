const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let i=0; i<matrix.length; i++) {
    let row = matrix[i];
    for (let j=0; j<row.length; j++) {
      if (row[j] === 0) {
        if (i+1 < matrix.length) {
          matrix[i+1][j] = 0;
        }
      } else {
        result = result + row[j];
      }
    }
  }
 return result
}

module.exports = {
  getMatrixElementsSum
};
