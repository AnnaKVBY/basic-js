const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {   
  if (!(arr instanceof Array)) throw new Error ("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;
  let newArr = [...arr];
  for (let i=0; i < arr.length; i++){   
    let j=0;
    if (arr[i] === `--discard-next` && i === arr.length-1){
      newArr.splice(i, 1);
      return newArr;
    }   
    if (arr[i] === `--discard-next` && i !== arr.length-1 && arr[j++] === `--double-prev`) {
      newArr.splice(i, 3);
      return newArr;
    }  

    if (arr[i] === `--discard-next` && i !== arr.length-1 && arr[j++] !== `--double-prev`) {
      newArr.splice(i, 2);
      return newArr;
    } 

    if (arr[i] === `--discard-prev` && arr[i] === arr[0]) {
      newArr.splice(i, 1);
      return newArr;
    } 
    if (arr[i] === `--discard-prev`) {
      newArr.splice(i-1, 2);
      return newArr;
    }
    if (arr[i] === `--double-next` && i === arr.length-1) {
      newArr.splice(i, 1);
      return newArr;
    }
    if (arr[i] === `--double-next` && i < arr.length-1) {
      newArr.splice(i, 1, arr[i+1]) 
      return newArr
    }
    if (arr[i] === `--double-prev` && arr[i] === arr[0]) {
      newArr.splice(i, 1); 
      return newArr; 
    }   
    if (arr[i] === `--double-prev`) {
      newArr.splice(i, 1, arr[i-1]);    
      return newArr;
    }
  }
 return arr;

}


module.exports = {
  transform
};
