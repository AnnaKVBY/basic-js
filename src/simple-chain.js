const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  Arr: [],
  getLength() {
    return this.Arr.length;
  },
  addLink(value) {  
      this.Arr.push(`( ${value} )`);
      return this;  
  },
  removeLink(position) {
    if (!Number.isInteger(position) || typeof position !== "number" || position < 1 || position > this.getLength()) {
      this.Arr.length = 0;
     throw new Error (`You can't remove incorrect link!`);
    }
    this.Arr.splice(position-1, 1);
    return this;    
  },
  reverseChain() {
    this.Arr.reverse();
    return this;
  },

  finishChain() {
    const newArr = [...this.Arr].join('~~');
    this.Arr.length = 0;
    return newArr;
  }
};


module.exports = {
  chainMaker
};
