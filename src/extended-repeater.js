const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  let result;
  let arr = [];
  if (options.hasOwnProperty('separator') === false && options.hasOwnProperty('addition') === false ) {   
    result = Array(options['repeatTimes']).fill(str).join("+")
  }
  if (options.hasOwnProperty('separator') && options.hasOwnProperty('addition') === false) {   
    result = Array(options['repeatTimes']).fill(str).join(options['separator'])
  }
  if (options.hasOwnProperty('addition') && options.hasOwnProperty('additionSeparator') === false) {   
    result = Array(options['repeatTimes']).fill(str+options['addition']).join(options['separator'])
  }
  if (options.hasOwnProperty('addition') && options.hasOwnProperty('additionSeparator')) {       
    let add = Array(options['additionRepeatTimes']).fill(options['addition']).join(options['additionSeparator'])
    result = Array(options['repeatTimes']).fill(str+add).join(options['separator'])
  }
  if (options.hasOwnProperty('addition') && options.hasOwnProperty('separator') === false && options.hasOwnProperty('additionSeparator') === false) {   
    let add = Array(options['additionRepeatTimes']).fill(options['addition']).join("|")
    result = Array(options['repeatTimes']).fill(str+add).join("+")
  }
  if (options.hasOwnProperty('addition') && options.hasOwnProperty('separator') === false && options.hasOwnProperty('additionSeparator')) {   
    let add = Array(options['additionRepeatTimes']).fill(options['addition']).join(options['additionSeparator'])
    result = Array(options['repeatTimes']).fill(str+add).join("+")
  }
  if (options.hasOwnProperty('addition') && options.hasOwnProperty('additionSeparator') === false && options.hasOwnProperty('separator')) {   
    let add = Array(options['additionRepeatTimes']).fill(options['addition']).join("|")
    result = Array(options['repeatTimes']).fill(str+add).join(options['separator'])
  }

 return result
 
}

module.exports = {
  repeater
};
